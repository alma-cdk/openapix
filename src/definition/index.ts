import * as fs from 'fs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as assets from 'aws-cdk-lib/aws-s3-assets';
import { Construct } from 'constructs';
import { Integration } from '../integrations/base';
import { Schema } from '../schema';
import { SecuritySchemes } from '../security-schemes/interfaces/security-schemes';
import { addError } from '../errors/add';
import { Authorizer } from '../security-schemes/interfaces/authorizer';
import { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validators';
import { CorsIntegration } from '../integrations/cors';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');

type Method = 'ANY'|'DELETE'|'GET'|'HEAD'|'OPTIONS'|'PATCH'|'POST'|'PUT';
type OpenApiMethodIntegrations = Record<string, Integration> // TODO add validation for method
type OpenApiPathIntegrations = Record<string, OpenApiMethodIntegrations>

export { SecuritySchemes } from '../security-schemes/interfaces/security-schemes';
export { Authorizer } from '../security-schemes/interfaces/authorizer';
export { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validators';

export interface OpenApiDefinitionProps {
  readonly upload?: boolean;
  readonly source: string | Schema;
  readonly integrations?: OpenApiPathIntegrations;
  readonly injections?: Record<string, any>;
  readonly rejections?: string[];
  readonly rejectionsDeep?: string[];
  readonly authorizers?: SecuritySchemes;
  readonly validators?: Record<string, Validator>;
  readonly cors?: CorsIntegration;
}

export interface Validator extends XAmazonApigatewayRequestValidator {
  readonly default?: boolean;
}

export class OpenApiDefinition extends apigateway.ApiDefinition {
  private definition?: any;
  private s3Location?: apigateway.ApiDefinitionS3Location;
  private readonly upload: boolean;
  private readonly scope: Construct;
  private readonly source: Schema;
  private readonly cors?: CorsIntegration;


  constructor(scope: Construct, props: OpenApiDefinitionProps) {
    super();
    const {
      upload = false,
      source,
      authorizers = {},
      integrations = {},
      validators = {},
      injections = {},
      rejections = [],
      rejectionsDeep = [],
      cors,
    } = props;

    this.scope = scope;
    this.upload = upload;
    this.source = this.resolveSource(source);
    this.cors = cors;

    // Handle injects/rejects
    this.source.inject(injections);
    this.source.reject(rejections);
    this.source.rejectDeep(rejectionsDeep);

    // Configurate integrations
    this.configureValidators(validators);
    this.configureAuthorizers(authorizers);
    this.configurePaths(integrations);

    // Finally expose the definition for CDK/CloudFormation
    this.exposeDefinition();
  }


  private configureValidators(validators: Record<string, Validator>): void {

    const defaults = Object.keys(validators).filter(k => validators[k].default === true)

    // Ensure only single validator configured as default
    if (defaults.length > 1) {
      addError(this.scope, `You may only configure one default validator`);
      return;
    }

    // Configure the default validator if provided
    if (defaults.length === 1) {
      this.source.set('x-amazon-apigateway-request-validator', defaults[0])
    }

    const cleaned = <Record<string, XAmazonApigatewayRequestValidator>>omitDeep(validators, 'default')

    this.source.set('x-amazon-apigateway-request-validators', cleaned);
  }

  /**
   * Configure Authorizers within OpenApi `components.securitySchemes`.
   */
  private configureAuthorizers(authorizers: SecuritySchemes): void {
    Object.keys(authorizers).map(id => {
      const config = authorizers[id];
      const path = `components.securitySchemes.${id}`;

      if (!this.source.has(path)) {
        addError(this.scope, `Security Scheme ${id} not found in OpenAPI Definition`);
        return;
      }

      const authorizer = this.source.get<Authorizer>(path);
      authorizer['x-amazon-apigateway-authtype'] = config['x-amazon-apigateway-authtype'];
      authorizer['x-amazon-apigateway-authorizer'] = config['x-amazon-apigateway-authorizer'];
      this.source.set(path, authorizer);
    });
  }

  /**
   * Configure all `x-amazon-apigateway-integration` values within OpenApi `paths`.
   */
  private configurePaths(paths: OpenApiPathIntegrations): void {
    Object.keys(paths).map(path => {
      if (!this.source.has(path)) {
        addError(this.scope, `OpenAPI schema is missing path for: ${path}`);
        return;
      }

      if (typeof this.cors !== 'undefined') {
        this.source.set(`${path}.OPTIONS`, this.cors);
      }

      const methods = paths[path];
      this.configurePathMethods(path, methods);
    });
  }

  /**
   * Configure `x-amazon-apigateway-integration` for given method.
   */
  private configurePathMethods(path: string, methods: OpenApiMethodIntegrations): void {
    Object.keys(methods).map(m => {
      const method = m.toLowerCase();
      this.ensureMethodExists(path, method);
      this.ensureNoIntegrationAlready(path, method);

      const integration = methods[method.toUpperCase() as Method]!;

      const methodPath = `paths['${path}']['${method}']`;

      if (typeof integration.xAmazonApiGatewayRequestValidator === 'string') {
        this.source.set(`${methodPath}['x-amazon-apigateway-request-validator']`, integration.xAmazonApiGatewayRequestValidator);
      }

      this.source.set(`${methodPath}['x-amazon-apigateway-integration']`, integration.xAmazonIntegration);
    });
  }

  /**
   * End-User can provide the OpenAPI definition either as a path to a file or
   * as an Asset. This method handles that and always returns Asset Source.
   */
  private resolveSource(source: string | Schema): Schema {
    if (typeof source === 'string') {
      return Schema.fromAsset(source);
    }
    return source;
  }


  /**
   * Set `s3Location` or `definition` to expose the generated definition
   * for CDK/CloudFormation.
   */
   private exposeDefinition(): void {
    const newSchema = this.source.definition;
    if (this.upload) {
      const newSchemaPath = __dirname + 'open-api-schema.compiled.yaml';
      fs.writeFileSync(newSchemaPath, JSON.stringify(newSchema), 'utf-8');
      const asset = new assets.Asset(this.scope, 'DefinitionAsset', {
        path: newSchemaPath,
      });

      this.s3Location = {
        bucket: asset.bucket.bucketArn,
        key: asset.s3ObjectKey,
      };
    } else {
      this.definition = newSchema;
    }
  }

  /**
   * Implement the functionality of exposing the API definition, either as S3 Asset Location or as Inline Definition.
   * @see https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk/aws-apigateway/lib/api-definition.ts#L134-L228
   */
  bind(_: Construct): apigateway.ApiDefinitionConfig {
    if (this.upload) {
      return {
        s3Location: this.s3Location,
      };
    }
    return {
      inlineDefinition: this.definition,
    };
  }

  /**
   * Ensures OpenAPI definition contains a given method for the path.
   */
  private ensureMethodExists(path: string, method: string): void {
    const value = this.source.get(`paths[${path}][${method}]`);

    if (typeof value === 'undefined') {
      addError(this.scope, `OpenAPI schema is missing method ${method} for path: ${path}`);
    }
  }

  /**
   * Ensures OpenAPI definition does not already have
   * `x-amazon-apigateway-integration` configuration for given method for the path.
   */
  private ensureNoIntegrationAlready(path: string, method: string): void {
    const value = this.source.get(`paths[${path}][${method}]['x-amazon-apigateway-integration']`);
    if (typeof value !== 'undefined') {
      addError(this.scope, `OpenAPI schema already has x-amazon-apigateway-integration configuration for method ${method} in path: ${path}`);
    }
  }

}
