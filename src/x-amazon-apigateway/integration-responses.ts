import { XAmazonApigatewayIntegrationResponse } from './integration-response';

/**
 * Defines the method's responses and specifies parameter mappings or
 * payload mappings from integration responses to method responses.
 */
export interface XAmazonApigatewayIntegrationResponses {

  /**
   * Either a regular expression used to match the integration response to the method response,
   * or default to catch any response that you haven't configured. For HTTP integrations,
   * the regex applies to the integration response status code. For Lambda invocations,
   * the regex applies to the errorMessage field of the error information object returned by
   * AWS Lambda as a failure response body when the Lambda function execution throws an exception.
   *
   * The Response status pattern property name refers to a response status code or regular expression
   * describing a group of response status codes. It does not correspond to any identifier of an
   * IntegrationResponse resource in the API Gateway REST API.
   */
  [responseStatusPattern: string]: XAmazonApigatewayIntegrationResponse;
}
