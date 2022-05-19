


/**
 * Request validator configuration.
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-request-validators.html
 */
export interface XAmazonApigatewayRequestValidator {
  validateRequestBody: boolean;
  validateRequestParameters: boolean;
}
