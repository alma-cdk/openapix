import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegration, XAmazonApigatewayIntegrationResponse } from "../x-amazon-apigateway/integration";

/** Interface implemented by all integrations. */
export interface IBaseIntegration {
  /** Returns the API Gateway Open Api integration extension. */
  getIntegration(): XAmazonApigatewayIntegration;
  /** Returns the validator identifier (if any). */
  getValidatorId(): string | undefined;
}

/** Method integration validator configuration. */
export interface ValidatorConfig {
  /**
   * Validator identifier for method integration. This will override the default
   * validator if one configured.
   *
   * Should match a key from OpenApi schema `components.securitySchemas`.
   */
  validator?: string;
}

/** Base integration config. */
export interface IntegrationConfig extends ValidatorConfig {}

/**
 * Essentially responsible for converting CDK `IntegrationProps` into
 * API Gateway OpenApi integration extension ()`XAmazonApigatewayIntegration`).
 * Also defines few basic methods (`getIntegration` & `getValidatorId`) used
 * by derivative classes.
 */
export abstract class BaseIntegration implements IBaseIntegration {
  protected readonly integration: XAmazonApigatewayIntegration;
  protected readonly validatorId?: string;

  /** Construc a new integration. */
  constructor(props: IntegrationProps, config: IntegrationConfig) {
    this.integration = this.mapPropsToIntegration(props);
    this.validatorId = config.validator;
  }

  /** Returns the API Gateway OpenApi integration extension. */
  public getIntegration(): XAmazonApigatewayIntegration {
      return this.integration;
  }

  /** Returns validator used by the integration (if any). */
  public getValidatorId(): string | undefined {
      return this.validatorId;
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

