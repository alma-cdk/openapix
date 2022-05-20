import * as fs from 'fs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as assets from 'aws-cdk-lib/aws-s3-assets';
import { Construct } from 'constructs';
import { AuthorizerConfig, AuthorizerExtensionsMutable } from '../authorizers/authorizer';
import { addError } from '../errors/add';
import { CorsIntegration } from '../integration/cors';
import { Schema } from '../schema';

import { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validator';
import { BasePropsWithDefaults, Methods, Paths, Validator } from './api-props';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');


export class OpenApiDefinition extends apigateway.ApiDefinition {
  private definition?: any;
  private s3Location?: apigateway.ApiDefinitionS3Location;
  private readonly upload: boolean;
  private readonly scope: Construct;
  private readonly source: Schema;
  private readonly defaultCors?: CorsIntegration | null;


  constructor(scope: Construct, props: BasePropsWithDefaults) {
    super();
    const {
      source,
      upload,
      paths,
      authorizers,
      validators,
      injections,
      rejections,
      rejectionsDeep,
      defaultCors,
    } = props;

    this.scope = scope;
    this.upload = upload;
    this.source = this.resolveSource(source);
    this.defaultCors = defaultCors;

    // Handle injects/rejects
    this.source.inject(injections);
    this.source.reject(rejections);
    this.source.rejectDeep(rejectionsDeep);

    // Configurate integrations
    this.configureValidators(validators);
    this.configureAuthorizers(authorizers);
    this.configurePaths(paths);

    // Finally expose the definition for CDK/CloudFormation
    this.exposeDefinition();
  }


  private configureValidators(validators: Record<string, Validator>): void {

    const keys = Object.keys(validators);

    const defaults = keys.filter(k => validators[k].default === true);

    // Ensure only single validator configured as default
    if (defaults.length > 1) {
      addError(this.scope, 'You may only configure one default validator');
      return;
    }

    // Configure the default validator if provided
    if (defaults.length === 1) {
      this.source.set('x-amazon-apigateway-request-validator', defaults[0]);
    }

    // Do not assign x-amazon-apigateway-request-validators object if none provided
    if (keys.length < 1) {
      return;
    }

    const cleaned = <Record<string, XAmazonApigatewayRequestValidator>>omitDeep(validators, 'default');

    this.source.set('x-amazon-apigateway-request-validators', cleaned);
  }

  /**
   * Configure Authorizers within OpenApi `components.securitySchemes`.
   */
  private configureAuthorizers(authorizers: AuthorizerConfig[]): void {
    authorizers.map(a => {

      const path = `components.securitySchemes.${a.id}`;

      if (!this.source.has(path)) {
        addError(this.scope, `Security Scheme ${a.id} not found in OpenAPI Definition`);
        return;
      }

      const authorizer = this.source.get<AuthorizerExtensionsMutable>(path);
      authorizer['x-amazon-apigateway-authtype'] = a.xAmazonApigatewayAuthtype;
      authorizer['x-amazon-apigateway-authorizer'] = a.xAmazonApigatewayAuthorizer;
      this.source.set(path, authorizer);
    });
  }

  /**
   * Configure all `x-amazon-apigateway-integration` values within OpenApi `paths`.
   */
  private configurePaths(paths: Paths): void {
    Object.keys(paths).map(path => {
      if (!this.source.has(path)) {
        addError(this.scope, `OpenAPI schema is missing path for: ${path}`);
        return;
      }

      if (typeof this.defaultCors !== 'undefined') {
        this.source.set(`${path}.OPTIONS`, this.defaultCors);
      }

      const methods = paths[path];
      this.configurePathMethods(path, methods);
    });
  }

  /**
   * Configure `x-amazon-apigateway-integration` for given method.
   */
  private configurePathMethods(path: string, methods: Methods): void {
    Object.keys(methods).map(m => {
      const method = m.toLowerCase();
      this.ensureMethodExists(path, method);
      this.ensureNoIntegrationAlready(path, method);

      const integration = methods[method.toUpperCase()]!;
      const methodPath = `paths['${path}']['${method}']`;

      const validator = integration.validator;
      if (typeof validator === 'string') {
        this.source.set(`${methodPath}['x-amazon-apigateway-request-validator']`, validator);
      }

      this.source.set(`${methodPath}['x-amazon-apigateway-integration']`, integration.xAmazonApigatwayIntegration);
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
    const newSchema = this.source.toObject();
    if (this.upload) {
      const newSchemaPath = __dirname + 'open-api-schema.compiled.yaml';// TODO?
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
