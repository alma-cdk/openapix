import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegrationRequestParameters } from './integration-request-parameters';
import { XAmazonApigatewayIntegrationRequestTemplates } from './integration-request-templates';
import { XAmazonApigatewayIntegrationResponses } from './integration-responses';
import { XAmazonApigatewayIntegrationTlsConfig } from './integration-tls-config';

/**
 * Specifies details of the backend integration used for this method.
 * This extension is an extended property of the OpenAPI Operation object.
 * The result is an API Gateway integration object.
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html
 */
export interface XAmazonApigatewayIntegration {

  /**
   * A list of request parameters whose values are to be cached.
   */
  readonly cacheKeyParameters?: string[];

  /**
   * An API-specific tag group of related cached parameters.
   */
  readonly cacheNamespace?: string;

  /**
   * The integration connection type.
   * The valid value is "VPC_LINK" for private integration
   * or "INTERNET", otherwise.
   *
   * @example
   * 'INTERNET'
   *
   * @example
   * 'VPC_LINK'
   */
  readonly connectionType?: apigateway.ConnectionType;

  /**
   * The ID of a VpcLink for the private integration.
   */
  readonly connectionId?: string;

  /**
   * For AWS IAM role-based credentials, specify the ARN of an appropriate
   * IAM role. If unspecified, credentials default to resource-based permissions
   * that must be added manually to allow the API to access the resource.
   * For more information, see Granting Permissions Using a Resource Policy.
   *
   * Note: When using IAM credentials, make sure that AWS STS Regional endpoints
   * are enabled for the Region where this API is deployed for best performance.
   *
   * @see https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#intro-permission-model-access-policy
   */
  readonly credentials?: string;

  /**
   * Response payload encoding conversion types.
   * Valid values are
   * 1) CONVERT_TO_TEXT, for converting a binary payload into a base64-encoded string or converting a text payload into a utf-8-encoded string or passing through the text payload natively without modification, and
   * 2) CONVERT_TO_BINARY, for converting a text payload into a base64-decoded blob or passing through a binary payload natively without modification.
   */
  readonly contentHandling?: apigateway.ContentHandling;

  /**
   * The HTTP method used in the integration request.
   * For Lambda function invocations, the value must be POST.
   *
   * @default
   * 'POST'
   */
  readonly httpMethod: string;

  /**
     * Specifies how a request payload of unmapped content type is passed through
     * the integration request without modification. Supported values are
     * when_no_templates, when_no_match, and never
     */
  readonly passthroughBehavior?: apigateway.PassthroughBehavior;

  /**
   * Specifies mappings from method request parameters to integration request
   * parameters.
   *
   * Supported request parameters are querystring, path, header, and body.
   */
  readonly requestParameters?: XAmazonApigatewayIntegrationRequestParameters;

  /**
   * Mapping templates for a request payload of specified MIME types.
   */
  readonly requestTemplates?: XAmazonApigatewayIntegrationRequestTemplates;

  /**
   * Defines the method's responses and specifies desired parameter mappings
   * or payload mappings from integration responses to method responses.
   */
  readonly responses?: XAmazonApigatewayIntegrationResponses;

  /**
   * Integration timeouts between 50 ms and 29,000 ms.
   *
   * @example
   * 1000
   */
  readonly timeoutInMillis?: number;

  /**
   * The type of integration with the specified backend. Valid values are:
   * - `http` or `http_proxy`, for integration with an HTTP backend.
   * - `aws_proxy`, for integration with AWS Lambda functions.
   * - `aws`, for integration with AWS Lambda functions or other AWS services, such as Amazon DynamoDB, Amazon Simple Notification Service, or Amazon Simple Queue Service.
   * - `mock`, for integration with API Gateway without invoking any backend.
   */
  readonly type: apigateway.IntegrationType;

  /**
   * Specifies the TLS configuration for an integration.
   */
  readonly tlsConfig?: XAmazonApigatewayIntegrationTlsConfig;

  /**
   * The endpoint URI of the backend.
   * For integrations of the aws type, this is an ARN value.
   * For the HTTP integration, this is the URL of the HTTP endpoint including the https or http scheme.
   */
  readonly uri: string;

}

