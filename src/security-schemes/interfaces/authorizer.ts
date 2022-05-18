import { XAmazonApigatewayAuthorizer } from "./x-amazon-apigateway-authorizer";
import { XAmazonApigatewayAuthType } from "./x-amazon-apigateway-authtype";

/**
 * Describes an authorizer defined in `securitySchemes` OpenApi 3 schema.
 *
 * @see https://swagger.io/specification/#security-scheme-object
 */
export interface Authorizer {

  /**
   * The type of the security scheme.
   *
   * OpenAPI v3 allows "apiKey", "http", "oauth2", "openIdConnect" but apparently APIGW only allows "apiKey".
   *
   * @example
   * 'apiKey'
   */
  type: 'apiKey';

  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * The name of the header, query or cookie parameter to be used.
   * Applicable for the authorizer of the `apiKey` type only.
   *
   * @example
   * 'Authorization'
   */
  name?: string;

  /**
   * The location of the API key. Valid values are "query", "header" or "cookie".
   * Applicable for the authorizer of the `apiKey` type only.
   *
   * @example
   * 'header'
   */
  in?: 'query'|'header'|'cookie';

  'x-amazon-apigateway-authtype'?: XAmazonApigatewayAuthType;

  'x-amazon-apigateway-authorizer'?: XAmazonApigatewayAuthorizer;
}




