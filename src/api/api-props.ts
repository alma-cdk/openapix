import { RestApiProps } from 'aws-cdk-lib/aws-apigateway';
import { AuthorizerConfig } from '../authorizers/authorizer';
import { Integration } from '../integration/base';
import { CorsIntegration } from '../integration/cors';
import { Schema } from '../schema';
import { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validator';

/** BaseProps for the `OpenApi` construct without `RestApiProps`. */
export interface OpenApiBaseProps {
  /**
   * OpenApi Schema Definition source configuration.
   * Provide either string path to source or an instance of `openapix.Schema`.
   *
   * @example
   * path.join(__dirname, 'schema.yaml')
   *
   * @example
   * openapix.Schema.fromInline(yamlContent)
   *
   * @example
   * const props: openapix.SchemaProps;
   * new openapix.Schema(props)
   *
   */
  readonly source: string | Schema;

  /**
   * Schema Definition location (inline vs. S3 location).
   * Set `true` to upload to S3 or `false` (default) to inline it into resulting
   * CloudFormation template.
   *
   * @default
   * false
   */
  readonly upload?: boolean;

  /**
   * Integrations for OpenApi Path definitions.
   *
   * @example
   * {
   *   '/message': {
   *     post: new openapix.LambdaIntegration(this, fn),
   *   },
   * }
   */
  readonly paths?: Paths;

  /**
   * Cognito User Pool or Custom Lambda based Authorizer configurations.
   *
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html
   *
   * @example
   * [
   *   new openapix.CognitoUserPoolsAuthorizer(this, 'MyCognitoAuthorizer', {
   *     cognitoUserPools: [userPool],
   *     resultsCacheTtl: Duration.minutes(5),
   *   }),
   * ]
   */
  readonly authorizers?: AuthorizerConfig[];

  /**
   * Configure availalbe request validators.
   * API Gateway REST APIs can perform request parameter and request body validation.
   *
   * You can optionally specify one of them with `default: true` to promote it
   * as the default validator applied to all integrations.
   *
   * For non-default validators, you must specify `validator: '<name>'` prop in
   * every integration you wish to use the given validator.
   *
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html
   *
   * @example
   * {
   *   'all': {
   *     validateRequestBody: true,
   *     validateRequestParameters: true,
   *     default: true,
   *   },
   *   'params-only' : {
   *     validateRequestBody: false,
   *     validateRequestParameters: true,
   *   },
   * }
   *
   */
  readonly validators?: Record<string, Validator>;

  /**
   * Default CORS configuration.
   * Applied to all path integrations.
   *
   * You can add path specific overrides by adding an `options` method with
   * `new openapix.CorsIntegration(...)` integration.
   *
   * @example
   * new openapix.CorsIntegration(this, {
   *   headers: 'Content-Type,X-Amz-Date,Authorization',
   *   origins: '*',
   *   methods: 'options,get',
   * }),
   */
  readonly defaultCors?: CorsIntegration;

  /**
   * Inject any OpenApi v3 data to given schema definition object paths.
   *
   * @example
   * {
   *   "info.title": "FancyPantsAPI"
   * }
   */
  readonly injections?: Record<string, any>;

  /**
   * Reject fields by absolute object path from generated definition.
   *
   * @example
   * ['info.description']
   */
  readonly rejections?: string[];

  /**
   * Reject all matching fields from generated definition.
   *
   * @example
   * ['example', 'examples']
   */
  readonly rejectionsDeep?: string[];

}


/** Props to configure `new openapix.OpenApi`. */
export interface OpenApiProps extends OpenApiBaseProps {

  /** Props to configure the underlying CDK `apigateway.RestApi`. */
  readonly restApiProps?: RestApiProps;
}

export type Paths = Record<string, Methods>
export type Methods = Record<string, Integration>


export interface Validator extends XAmazonApigatewayRequestValidator {
  readonly default?: boolean;
}

/**
 * Internal interface holding baseProps with default values.
 */
export interface BasePropsWithDefaults extends OpenApiBaseProps {
  readonly source: string | Schema;
  //readonly source: string;
  readonly upload: boolean;
  readonly paths: Paths;
  readonly authorizers: AuthorizerConfig[];
  readonly validators: Record<string, Validator>;
  readonly injections: Record<string, any>;
  readonly rejections: string[];
  readonly rejectionsDeep: string[];
}

