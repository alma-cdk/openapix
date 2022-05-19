


/**
 * Request validator configuration.
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-request-validators.html
 */
export interface XAmazonApigatewayRequestValidator {
  readonly validateRequestBody: boolean;
  readonly validateRequestParameters: boolean;
}
