

/**
 * Specifies mappings from integration method response parameters to method response parameters.
 * You can map header, body, or static values to the header type of the method response.
 *
 * @example
 * {
 *   'method.response.header.Location' : 'integration.response.body.redirect.url',
 *   'method.response.header.x-user-id' : 'integration.response.header.x-userid'
 * }
 */
export interface XAmazonApigatewayIntegrationResponseParameters {
  /**
   * The named parameter value can be derived from the header and body types of the integration response parameters.
   *
   * @jsii ignore
   */
  [parameter: string]: string;
}
