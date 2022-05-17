import { XAmazonApigatewayAuthType } from '../interfaces/x-amazon-apigateway-authtype';
import { XAmazonApigatewayAuthorizer } from '../interfaces/x-amazon-apigateway-authorizer';

/**
 * Authorizer Identifier MUST match a object key in OpenApi v3 definition
 * `components/securitySchemes`.
 *
 * @example
 * 'EndpointAuthorizer'
 */
export type Id = string;

export interface XAuthorizer {
  readonly id: Id;
  readonly 'x-amazon-apigateway-authtype': XAmazonApigatewayAuthType;
  readonly 'x-amazon-apigateway-authorizer': XAmazonApigatewayAuthorizer;
}








/*
components:
  securitySchemes:
    EndpointAuthorizer:
      type: apiKey
      name: Authorization
      in: header
      x-amazon-apigateway-authtype: cognito_user_pools
      x-amazon-apigateway-authorizer:
        type: cognito_user_pools
        providerARNs:
          - arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}
*/
