/**
 * Specifies a mapping template to transform the integration response body
 * to the method response body for a given MIME type.
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings
 *
 * @example
 * {
 *   'application/json': '#set ($root=$input.path('$')) { \"stage\": \"$root.name\", \"user-id\": \"$root.key\" }',
 * }
 */
export interface XAmazonApigatewayIntegrationResponseTemplates {

  /**
   * @example
   * {
   *   'application/json': '#set ($root=$input.path('$')) { \"stage\": \"$root.name\", \"user-id\": \"$root.key\" }',
   * }
   */
  [mimeType: string]: string;
}
