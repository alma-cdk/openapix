import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { AuthorizerConfig, AuthorizerExtensionsMutable } from '../authorizers/authorizer';
import { addError } from '../errors/add';
import { CorsIntegration } from '../integration/cors';
import { Schema } from '../schema';
import { SchemaAsset } from '../schema-asset';
import { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validator';
import { ApiBaseProps, Methods, Paths, Validator } from './api-props';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');

/** Represents an OpenAPI v3 definition asset. */
export class ApiDefinition extends apigateway.ApiDefinition {

  /**
   * Exposes the processed OpenApi Schema Object.
   * Mainly useful for testing purposes.
   */
  public readonly document: any;

  /** Determines if `s3Location` or `inlineDefinition` is used by `bind()` method. */
  private readonly upload: boolean;

  /** Construct scope into which the SpecRestApi is created. */
  private readonly scope: Construct;

  /** Schema instance that will be processed/modified. */
  private readonly schema: Schema;

  /** Represents an OpenAPI v3 definition asset. */
  constructor(scope: Construct, props: ApiBaseProps) {
    super();

    this.scope = scope;
    this.upload = props.upload === true;
    this.schema = this.resolveSource(props.source);

    // Handle injects/rejects
    this.schema.inject(props.injections);
    this.schema.reject(props.rejections);
    this.schema.rejectDeep(props.rejectionsDeep);

    // Configurate integrations
    this.configureValidators(props.validators);
    this.configureAuthorizers(props.authorizers);
    this.configurePaths(props.paths, props.defaultCors);

    // Finally expose the processed OpenApi v3 document
    this.document = this.schema.toDocument();
    this.validateDocument(this.document);
  }

  /** Configures API Gateway validators (if any). */
  private configureValidators(validators: Record<string, Validator> = {}): void {

    const keys = Object.keys(validators);

    // Do not assign x-amazon-apigateway-request-validators object if none provided
    if (keys.length < 1) {
      return;
    }

    const defaults = keys.filter(k => validators[k].default === true);

    // Ensure only single validator configured as default
    if (defaults.length > 1) {
      addError(this.scope, 'You may only configure one default validator');
      return;
    }

    // Configure the default validator if provided
    if (defaults.length === 1) {
      const defaultValidator = defaults[0];
      this.schema.set('x-amazon-apigateway-request-validator', defaultValidator);
    }

    // Omit the non-standard "default" field
    const cleaned = <Record<string, XAmazonApigatewayRequestValidator>>omitDeep(validators, 'default');

    this.schema.set('x-amazon-apigateway-request-validators', cleaned);
  }

  /**
   * Configure Authorizers within OpenApi `components.securitySchemes`.
   */
  private configureAuthorizers(authorizers: AuthorizerConfig[] = []): void {
    authorizers.map(a => {

      const path = `components.securitySchemes.${a.id}`;

      if (!this.schema.has(path)) {
        addError(this.scope, `Security Scheme ${a.id} not found in OpenAPI Definition`);
        return;
      }

      const authorizer = this.schema.get<AuthorizerExtensionsMutable>(path);
      authorizer['x-amazon-apigateway-authtype'] = a.xAmazonApigatewayAuthtype;
      authorizer['x-amazon-apigateway-authorizer'] = a.xAmazonApigatewayAuthorizer;
      this.schema.set(path, authorizer);
    });
  }

  /**
   * Configure all `x-amazon-apigateway-integration` values within OpenApi `paths`.
   */
  private configurePaths(paths: Paths = {}, defaultCors?: CorsIntegration): void {
    Object.keys(paths).map(path => {

      if (!this.schema.has(`paths.${path}`)) {
        const message = `OpenAPI schema is missing path for: ${path}`;
        addError(this.scope, message);
        return;
      }

      if (typeof defaultCors !== 'undefined') {
        this.schema.set(`${path}.options`, defaultCors);
      }

      const methods = paths[path];
      this.configurePathMethods(path, methods);
    });
  }

  /**
   * Configure `x-amazon-apigateway-integration` for given method.
   */
  private configurePathMethods(path: string, methods: Methods = {}): void {
    Object.keys(methods).map(m => {
      const method = m.toLowerCase();

      this.ensureMethodExists(path, method);
      this.ensureNoIntegrationAlready(path, method);

      const integration = methods[method.toLowerCase()]!;
      const methodPath = `paths['${path}']['${method}']`;

      const validator = integration.validator;
      if (typeof validator === 'string') {
        this.schema.set(`${methodPath}['x-amazon-apigateway-request-validator']`, validator);
      }

      this.schema.set(`${methodPath}['x-amazon-apigateway-integration']`, integration.xAmazonApigatwayIntegration);
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
   * Implement the functionality of exposing the API definition, either as `s3Location` or as `inlineDefinition`.
   *
   * Called by `apigateway.SpecRestApi`.
   *
   * @see https://github.com/aws/aws-cdk/blob/87dd2a6eb0b8208e49ff5f0cc8486ad58410d3ef/packages/%40aws-cdk/aws-apigateway/lib/restapi.ts#L636
   * @see https://github.com/aws/aws-cdk/blob/87dd2a6eb0b8208e49ff5f0cc8486ad58410d3ef/packages/%40aws-cdk/aws-apigateway/lib/api-definition.ts#L81-L88
   */
  public bind(_: Construct): apigateway.ApiDefinitionConfig {
    const definition = this.document;

    if (this.upload === true) {
      const asset = new SchemaAsset(this.scope, 'SchemaAsset', definition);
      return {
        s3Location: {
          bucket: asset.bucket.bucketArn,
          key: asset.s3ObjectKey,
        },
      };
    }

    return {
      inlineDefinition: definition,
    };
  }

  /**
   * Ensures OpenAPI definition contains a given method for the path.
   */
  private ensureMethodExists(path: string, method: string): void {
    const value = this.schema.get(`paths[${path}][${method}]`);

    if (typeof value === 'undefined') {
      const message = `OpenAPI schema is missing method ${method} for path: ${path}`;
      addError(this.scope, message);
    }
  }

  /**
   * Ensures OpenAPI definition does not already have
   * `x-amazon-apigateway-integration` configuration for given method for the path.
   */
  private ensureNoIntegrationAlready(path: string, method: string): void {
    const value = this.schema.get(`paths[${path}][${method}]['x-amazon-apigateway-integration']`);
    if (typeof value !== 'undefined') {
      const message = `OpenAPI schema already has x-amazon-apigateway-integration configuration for method ${method} in path: ${path}`;
      addError(this.scope, message);
    }
  }

  /** Validate final OpenApi v3 document. */
  private validateDocument(document: any) {
    if (typeof(document) !== 'object') {
      addError(this.scope, 'definition should be of type object');
    }

    if (Object.keys(document).length === 0) {
      addError(this.scope, 'JSON definition cannot be empty');
    }
  }

}
