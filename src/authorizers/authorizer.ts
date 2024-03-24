import { XAmazonApigatewayAuthorizer } from '../x-amazon-apigateway/authorizer';
import { XAmazonApigatewayAuthType } from '../x-amazon-apigateway/authtype';

/**
 * Authorizer Identifier MUST match a object key in OpenApi v3 definition
 * `components/securitySchemes`.
 *
 * @example
 * 'EndpointAuthorizer'
 */
export type Id = string;

export interface AuthorizerConfig extends AuthorizerExtensions {
  readonly id: Id;
  /**
   * API Gateway endpoints can have only one authorizer configured. If multiple authorizers are configured, select one with `defaultAuthorizer` prop.
   * Multiple authorizers with `defaultAuthorizer` set as true will throw an error.
   */
  readonly defaultAuthorizer?: boolean;
}

export interface AuthorizerExtensions {
  readonly xAmazonApigatewayAuthtype: XAmazonApigatewayAuthType;
  readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
}

export interface AuthorizerExtensionsMutable {
  'x-amazon-apigateway-authtype': XAmazonApigatewayAuthType;
  'x-amazon-apigateway-authorizer': XAmazonApigatewayAuthorizer;
}
