import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegration, XAmazonApigatewayIntegrationResponse } from "../x-amazon-apigateway/integration";


export interface IBaseIntegration {
  getIntegration(): XAmazonApigatewayIntegration;
  getValidatorId(): string | undefined;
}

export interface IntegrationConfig {
  validatorId?: string;
}

export abstract class BaseIntegration implements IBaseIntegration {
  protected readonly integration: XAmazonApigatewayIntegration;
  protected readonly validatorId?: string;

  constructor(props: IntegrationProps, config: IntegrationConfig) {
    this.integration = this.mapPropsToIntegration(props);
    this.validatorId = config.validatorId;
  }

  public getIntegration(): XAmazonApigatewayIntegration {
      return this.integration;
  }

  public getValidatorId(): string | undefined {
      return this.validatorId;
  }

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

