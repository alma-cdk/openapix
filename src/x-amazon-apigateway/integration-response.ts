import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegrationResponseParameters } from './integration-response-parameters';
import { XAmazonApigatewayIntegrationResponseTemplates } from './integration-response-templates';


/**
 * Defines a response and specifies parameter mappings or payload mappings
 * from the integration response to the method response.
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-response.html
 */
export interface XAmazonApigatewayIntegrationResponse {

  /**
   * HTTP status code for the method response.
   * This must correspond to a matching response in the OpenAPI Operation responses field.
   *
   * @example
   * '200'
   */
  readonly statusCode: string;

  /**
   * Specifies MIME type-specific mapping templates for the response’s payload.
   *
   * @example
   * {
   *   'application/json': '#set ($root=$input.path('$')) { \"stage\": \"$root.name\", \"user-id\": \"$root.key\" }',
   * }
   */
  readonly responseTemplates?: XAmazonApigatewayIntegrationResponseTemplates;

  /**
   * Specifies parameter mappings for the response.
   * Only the header and body parameters of the integration response
   * can be mapped to the header parameters of the method.
   */
  readonly responseParameters?: XAmazonApigatewayIntegrationResponseParameters;

  /**
   * Response payload encoding conversion types.
   * Valid values are
   * 1) CONVERT_TO_TEXT, for converting a binary payload into a base64-encoded string or converting a text payload into a utf-8-encoded string or passing through the text payload natively without modification, and
   * 2) CONVERT_TO_BINARY, for converting a text payload into a base64-decoded blob or passing through a binary payload natively without modification.
   */
  readonly contentHandling?: apigateway.ContentHandling;
}
