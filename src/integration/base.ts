import { IntegrationProps, IntegrationResponse } from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegration, XAmazonApigatewayIntegrationResponses } from '../x-amazon-apigateway';

/** Interface implemented by all integrations. */
export interface IBaseIntegration {
  /** Identifier to enable internal type checks. */
  readonly type: InternalIntegrationType;

  readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
  readonly validator?: string;
}

export enum InternalIntegrationType {
  AWS = 'AWS',
  CORS = 'CORS',
  HTTP = 'HTTP',
  LAMBDA = 'LAMBDA',
  MOCK = 'MOCK',
}

/** Method integration validator configuration. */
export interface ValidatorConfig {
  /**
   * Validator identifier for method integration. This will override the default
   * validator if one configured.
   *
   * Should match a key from OpenApi schema `components.securitySchemas`.
   */
  readonly validator?: string;
}

/** Base integration config. */
export interface IntegrationConfig extends ValidatorConfig {
  readonly type: InternalIntegrationType;
}

/**
 * Essentially responsible for converting CDK `IntegrationProps` into
 * API Gateway OpenApi integration extension ()`XAmazonApigatewayIntegration`).
 * Also defines few basic methods (`getIntegration` & `getValidatorId`) used
 * by derivative classes.
 */
export abstract class Integration implements IBaseIntegration {
  public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
  public readonly validator?: string;

  public readonly type: InternalIntegrationType;

  /** Construc a new integration. */
  constructor(props: IntegrationProps, config: IntegrationConfig) {
    this.xAmazonApigatewayIntegration = this.mapPropsToIntegration(props);
    this.validator = config.validator;
    this.type = config.type;
  }

  /**
   * Convert CDK integration into API Gateway OpenApi integration extension.
   */
  private mapPropsToIntegration(props: IntegrationProps): XAmazonApigatewayIntegration {
    return {
      cacheKeyParameters: props.options?.cacheKeyParameters,
      cacheNamespace: props.options?.cacheNamespace,
      connectionType: props.options?.connectionType,
      connectionId: props.options?.vpcLink?.vpcLinkId,
      credentials: props.options?.credentialsRole?.roleArn,
      contentHandling: props.options?.contentHandling,
      httpMethod: props.integrationHttpMethod || 'POST',
      passthroughBehavior: props.options?.passthroughBehavior,
      requestParameters: props.options?.requestParameters,
      requestTemplates: props.options?.requestTemplates,
      responses: this.resolveResponses(props),
      timeoutInMillis: this.resolveTimeout(props),
      type: props.type,
      //tlsConfig: props.options?.
      uri: props.uri,
    };
  }

  private resolveTimeout(props: IntegrationProps): number | undefined {
    if (typeof props.options?.timeout !== 'undefined') {
      return props.options.timeout.toMilliseconds();
    }
    return undefined;
  }

  private resolveResponses(props: IntegrationProps): XAmazonApigatewayIntegrationResponses | undefined {
    const responses: XAmazonApigatewayIntegrationResponses = {};
    props.options?.integrationResponses?.forEach(resp => {

      const selectionPattern = this.resolveSelectionPattern(props.options!.integrationResponses!, resp);

      if (typeof selectionPattern === 'undefined') {
        throw new Error('You must provide a selectionPattern when multiple integration responses defined');
      }

      responses[selectionPattern] = {
        statusCode: resp.statusCode,
        responseParameters: resp.responseParameters,
        responseTemplates: resp.responseTemplates,
        contentHandling: resp.contentHandling,

      };
    });
    return responses;
  }

  /**
   * Decide selection pattern.
   *
   * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.IntegrationResponse.html#selectionpattern
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-responses.html
   *
   * @default
   * resp.statusCode
   */
  private resolveSelectionPattern(responses: IntegrationResponse[], resp: IntegrationResponse): string | undefined {

    if (typeof resp?.selectionPattern === 'string') {
      return resp.selectionPattern;
    }

    if (responses.length === 1) {
      return 'default';
    }

    return undefined;
  }

}
