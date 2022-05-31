

/**
 * Specifies mappings from named method request parameters to integration request parameters.
 * The method request parameters must be defined before being referenced.
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-requestParameters.html
 */
export interface XAmazonApigatewayIntegrationRequestParameters {

  /**
   * The value is typically a predefined method request parameter of the
   * `method.request.<param-type>.<param-name>` format, where `<param-type>`
   * can be querystring, path, header, or body.
   *
   * However, $context.VARIABLE_NAME, $stageVariables.VARIABLE_NAME,
   * and STATIC_VALUE are also valid.
   *
   * For the body parameter, the <param-name> is a JSON path expression
   * without the $. prefix.
   */
  [parameter: string]: string;
}
