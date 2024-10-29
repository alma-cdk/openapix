import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { AuthorizerConfig, AuthorizerExtensionsMutable } from '../authorizers/authorizer';
import { addError } from '../errors/add';
import { Integration } from '../integration';
import { CorsIntegration } from '../integration/cors';
import { IDocument, Schema } from '../schema';
import { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validator';
import { ApiBaseProps, HTTPMethod, Methods, Paths, Validator } from './props';
import { getMethodsFromSchemaPath, getSchemaPaths } from './utils';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');

/** Represents an OpenAPI v3 definition asset. */
export class ApiDefinition extends apigateway.ApiDefinition {

  /**
   * Exposes the processed OpenApi Schema Object.
   * Mainly useful for testing purposes.
   */
  public readonly document: IDocument;

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
    this.configurePaths(props.paths, props.defaultCors, props.defaultIntegration);

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

      const authorizerComponentSecuritySchemePath = `components.securitySchemes.${a.id}`;

      if (!this.schema.has(authorizerComponentSecuritySchemePath)) {
        addError(this.scope, `Security Scheme ${a.id} not found in OpenAPI Definition`);
        return;
      }

      /**
      * if current authorizer is defined for whole api, add security to all paths
      */
      const schemaSecurity = this.schema.get('security');
      // check if security includes authorizer
      const schemaSecurityIncludesCurrentAuthorizer = Array.isArray(schemaSecurity) && schemaSecurity.some(s => Object.keys(s).includes(a.id));
      if (schemaSecurityIncludesCurrentAuthorizer) {
        // loop schema paths
        const schemaPaths = getSchemaPaths(this.schema);

        if (schemaPaths !== undefined) {
          Object.keys(schemaPaths).forEach(path => {
            // loop methods
            const schemaPathMethods = getMethodsFromSchemaPath(schemaPaths[path]);
            Object.keys(schemaPathMethods).forEach(method => {
            // check if method has security
              const methodSecurity = this.schema.get(`paths['${path}'].${method}.security`);

              if (methodSecurity && Array.isArray(methodSecurity)) {
              // check if security includes authorizer
                const methodSecurityIncludesCurrentAuthorizer = methodSecurity.some(s => Object.keys(s).includes(a.id));
                if (!methodSecurityIncludesCurrentAuthorizer) {
                  this.schema.set(`paths['${path}'].${method}.security`, [...methodSecurity, { [a.id]: [] }]);
                }
              } else {
                this.schema.set(`paths['${path}'].${method}.security`, [{ [a.id]: [] }]);
              }
            });
          });
        }
      }

      const authorizer = this.schema.get<AuthorizerExtensionsMutable>(authorizerComponentSecuritySchemePath);
      authorizer['x-amazon-apigateway-authtype'] = a.xAmazonApigatewayAuthtype;
      authorizer['x-amazon-apigateway-authorizer'] = a.xAmazonApigatewayAuthorizer;
      this.schema.set(authorizerComponentSecuritySchemePath, authorizer);
    });
  }

  /**
   * Configure all `x-amazon-apigateway-integration` values within OpenApi `paths`.
   */
  private configurePaths(paths: Paths = {}, defaultCors?: CorsIntegration, defaultIntegration?: Integration): void {

    const schemaPaths = getSchemaPaths(this.schema);
    // Check that schema has paths object
    if (typeof schemaPaths === 'undefined') {
      addError(this.scope, 'OpenAPI Definition does not have paths object');
      return;
    }

    // Loop through paths to ensure all paths are defined in OpenAPI schema
    Object.keys(paths).forEach(path => {
      if (!schemaPaths[path]) {
        const message = `Path ${path} not found in OpenAPI Definition. Check paths-props in definition.`;
        addError(this.scope, message);
      }
    });

    // Loop through all schema paths
    Object.keys(schemaPaths).map((path: string) => {
      if (!defaultIntegration && !paths[path]) {
        const message = `Missing integration for path: ${path}. Check paths-props in definition, or add a default integration.`;
        addError(this.scope, message);
        return;
      }
      if (typeof defaultCors !== 'undefined') {
        this.configureDefaultCors(path, defaultCors);
      }

      const methods = paths[path];
      this.configurePathMethods(path, schemaPaths[path], methods, defaultIntegration, defaultCors );
    });
  }

  private configureDefaultCors(path: string, defaultCors: CorsIntegration): void {
    this.schema.set(`paths['${path}'].options`, {
      'summary': 'CORS support',
      'description': 'Enable CORS by returning correct headers',
      'consumes': [
        'application/json',
      ],
      'produces': [
        'application/json',
      ],
      'tags': [
        'CORS',
      ],
      'responses': {
        204: {
          description: 'Default response for CORS method',
          headers: {
            'Access-Control-Allow-Headers': {
              type: 'string',
            },
            'Access-Control-Allow-Methods': {
              type: 'string',
            },
            'Access-Control-Allow-Origin': {
              type: 'string',
            },
          },
        },
      },
      'x-amazon-apigateway-integration': defaultCors.xAmazonApigatewayIntegration,
    });
  }

  /**
   * Configure `x-amazon-apigateway-integration` for given method.
   */
  private configurePathMethods(
    schemaPathName: string,
    schemaPath: Record<string, any>,
    methods: Methods = {},
    defaultIntegration?: Integration,
    defaultCors?: CorsIntegration,

  ): void {
    // Loop through given methods to ensure they are defined
    // and dont have an existing integration
    Object.keys(methods).map((method: string) => {
      const methodName = method.toLowerCase();
      this.ensureMethodExists(schemaPathName, methodName);
      this.ensureNoIntegrationAlready(schemaPathName, methodName);
    });

    const schemaPathMethods = getMethodsFromSchemaPath(schemaPath);
    // Look through all schema path methods
    Object.keys(schemaPathMethods).map((schemaPathMethod) => {
      const method = methods[schemaPathMethod as HTTPMethod];

      // Do not process options method because it has been modified already
      // and no override method is present
      if (defaultCors && schemaPathMethod === 'options' && !method) {
        return;
      }
      if (!defaultIntegration && !method) {
        const message = `OpenAPI schema has an unhandled path method: ${schemaPathName}/${schemaPathMethod}`;
        addError(this.scope, message);
        return;
      }

      let integration;
      // Generate mock integration if requested
      if (defaultIntegration && !method) {
        integration = defaultIntegration;
      } else {
        integration = method as Integration;
      }

      const methodPath = `paths['${schemaPathName}']['${schemaPathMethod}']`;

      const validator = integration.validator;
      if (typeof validator === 'string') {
        this.schema.set(`${methodPath}['x-amazon-apigateway-request-validator']`, validator);
      }

      this.schema.set(`${methodPath}['x-amazon-apigateway-integration']`, integration.xAmazonApigatewayIntegration);
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
    if (this.upload === true) {
      const asset = this.schema.toAsset(this.scope, 'SchemaAsset');
      return {
        s3Location: {
          bucket: asset.bucket.bucketArn,
          key: asset.s3ObjectKey,
        },
      };
    }

    return {
      inlineDefinition: this.schema.toDocument(),
    };
  }

  /**
   * Ensures OpenAPI definition contains a given method for the path.
   */
  private ensureMethodExists(path: string, method: string): void {
    const value = this.schema.get(`paths['${path}'][${method}]`);

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
    const value = this.schema.get(`paths['${path}'][${method}]['x-amazon-apigateway-integration']`);
    if (typeof value !== 'undefined') {
      const message = `OpenAPI schema already has x-amazon-apigateway-integration configuration for method ${method} in path: ${path}`;
      addError(this.scope, message);
    }
  }

  /** Validate final OpenApi v3 document. */
  private validateDocument(document: IDocument) {
    if (typeof(document) !== 'object') {
      addError(this.scope, 'definition should be of type object');
    }

    if (Object.keys(document).length === 0) {
      addError(this.scope, 'JSON definition cannot be empty');
    }
  }
}
