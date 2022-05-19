import { XAmazonApigatewayAuthType } from '../x-amazon-apigateway/authtype';
import { XAmazonApigatewayAuthorizer } from '../x-amazon-apigateway/authorizer';

/**
 * Authorizer Identifier MUST match a object key in OpenApi v3 definition
 * `components/securitySchemes`.
 *
 * @example
 * 'EndpointAuthorizer'
 */
export type Id = string;

export interface AuthorizerConfig extends Readonly<AuthorizerExtensions> {
  readonly id: Id;
}

export interface AuthorizerExtensions {
  'x-amazon-apigateway-authtype': XAmazonApigatewayAuthType;
  'x-amazon-apigateway-authorizer': XAmazonApigatewayAuthorizer;
}
