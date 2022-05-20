import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegration, XAmazonApigatewayIntegrationResponse } from '../x-amazon-apigateway/integration';

/** Interface implemented by all integrations. */
export interface IBaseIntegration {

  /** Identifier to enable internal type checks. */
  readonly type: InternalIntegrationType;

  readonly xAmazonApigatwayIntegration: XAmazonApigatewayIntegration;
  readonly validator?: string;
}

export enum InternalIntegrationType {
  AWS='AWS',
  CORS='CORS',
  HTTP='HTTP',
  LAMBDA='LAMBDA',
  MOCK='MOCK',
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
  public readonly xAmazonApigatwayIntegration: XAmazonApigatewayIntegration;
  public readonly validator?: string;

  public readonly type: InternalIntegrationType;

  /** Construc a new integration. */
  constructor(props: IntegrationProps, config: IntegrationConfig) {
    this.xAmazonApigatwayIntegration = this.mapPropsToIntegration(props);
    this.validator = config.validator;
    this.type = config.type;
  }

  /** Convert CDK integration into API Gateway OpenApi integration extension. */
  private mapPropsToIntegration(props: IntegrationProps): XAmazonApigatewayIntegration {
    return {
      type: props.type,
      uri: props.uri,
      httpMethod: props.integrationHttpMethod || 'POST',
      credentials: props.options?.credentialsRole?.roleArn,
      requestTemplates: props.options?.requestTemplates,
      requestParameters: props.options?.requestParameters,
      cacheNamespace: props.options?.cacheNamespace,
      passthroughBehavior: props.options?.passthroughBehavior,
      responses: (function() {
        const responses: Record<string, XAmazonApigatewayIntegrationResponse> = {};
        props.options?.integrationResponses?.forEach(resp => {
          if (typeof resp.selectionPattern !== 'string') return;
          responses[resp.selectionPattern] = {
            statusCode: resp.statusCode,
            responseParameters: resp.responseParameters,
            responseTemplates: resp.responseTemplates,
          };
        });
        return responses;
      }()),
    };
  }
}

