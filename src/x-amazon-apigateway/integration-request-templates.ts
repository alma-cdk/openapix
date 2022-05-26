/**
 * Specifies mapping templates for a request payload of the specified MIME types.
 */
export interface XAmazonApigatewayIntegrationRequestTemplates {

  /**
   * @example
   * 'application/json'
   */
  [mimeType: string]: string;
}
