import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig, ValidatorConfig } from './base';
import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';

export interface HttpIntegrationProps extends apigateway.HttpIntegrationProps, ValidatorConfig {}

/** Defines a HTTP(S) integration. */
export class HttpIntegration extends BaseIntegration {

  /**
   * Defines a HTTP(S) integration.
   *
   * @example
   * '/ext': {
   *   'ANY': new openapix.HttpIntegration(this, "https://example.com"),
   * },
   */
  constructor(_: Construct, url: string, props?: HttpIntegrationProps) {

    const integration: IntegrationProps = {
      type: HttpIntegration.selectIntegrationType(props?.proxy),
      uri: url,
      integrationHttpMethod: HttpIntegration.selectIntegrationHttpMethod(props?.httpMethod),
      options: props?.options,
    };

    const config: IntegrationConfig = {
      validator: props?.validator,
    }

    super(integration, config);
  }

  /** Selects the correct integration type configuration. */
  private static selectIntegrationType(proxy?: boolean): apigateway.IntegrationType {
    if (proxy === false) {
      return apigateway.IntegrationType.HTTP;
    }
    // default to proxy as CDK does
    return apigateway.IntegrationType.HTTP_PROXY;
  }

  /**
   * Selects the integration HTTP method.
   *
   * @default
   * 'GET'
   */
  private static selectIntegrationHttpMethod(httpMethod?: string): string {
    if (typeof httpMethod === 'string' && httpMethod.length > 0) {
      return httpMethod;
    }

    return 'GET';
  }


}
