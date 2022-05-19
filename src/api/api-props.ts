import { Schema } from '../schema';
import { Integration } from '../integration/base';
import { CorsIntegration } from '../integration/cors';
import { XAmazonApigatewayRequestValidator } from '../x-amazon-apigateway/request-validators';
import { EndpointType, RestApiProps as OriginalRestApiProps } from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayAuthorizer } from '../x-amazon-apigateway/authorizer';
import { XAmazonApigatewayAuthType } from '../x-amazon-apigateway/authtype';
import { AuthorizerConfig } from '../authorizers/authorizer';

export type AuthType = Readonly<XAmazonApigatewayAuthType>;

export type Authorizer = Readonly<XAmazonApigatewayAuthorizer>


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
   * new openapix.Schema(definition)
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
   *     'POST': new openapix.LambdaIntegration(this, fn),
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
   * {
   *   MyCognitoAuthorizer: {
   *     cognitoUserPools: [userPool],
   *     resultsCacheTtl: Duration.minutes(5),
   *   },
   * }
   */
  readonly authorizers?: Record<string, AuthorizerConfig>;

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
   * You can add path specific overrides by adding an `OPTIONS` method with
   * `new openapix.CorsIntegration(...)` integration.
   *
   * @example
   * new openapix.CorsIntegration(this, {
   *   headers: 'Content-Type,X-Amz-Date,Authorization',
   *   origins: '*',
   *   methods: 'OPTIONS,GET',
   * }),
   */
  readonly defaultCors?: CorsIntegration | null;

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

/** Props to configure the underlying CDK `apigateway.RestApi`. */
export interface RestApiProps extends OriginalRestApiProps {
  /**
   * A list of the endpoint types of the API. Use this property when creating an API.
   *
   * OpenApiX defaults to `[EndpointType.REGIONAL]` instead of
   * `[EndpointType.EDGE]` which is the default in `apigateway.RestApiProps`.
   *
   * @default
   * [EndpointType.REGIONAL]
   */
  endpointTypes?: EndpointType[],
}

/** Props to configure `new openapix.OpenApi`. */
export interface OpenApiProps extends OpenApiBaseProps {

  /** Props to configure the underlying CDK `apigateway.RestApi`. */
  restApiProps?: RestApiProps;
}

/** Internal interface holding baseProps with default values.  */
export type BasePropsWithDefaults = Required<OpenApiBaseProps>;

export type Paths = Record<string, Methods>
export type Methods = Record<Method, Integration> // TODO add validation for method
export type Method = 'ANY'|'DELETE'|'GET'|'HEAD'|'OPTIONS'|'PATCH'|'POST'|'PUT';

export interface Validator extends Readonly<XAmazonApigatewayRequestValidator> {
  readonly default?: boolean;
}
