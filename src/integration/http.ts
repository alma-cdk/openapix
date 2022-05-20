import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { Integration, IntegrationConfig, InternalIntegrationType, ValidatorConfig } from './base';

export interface HttpIntegrationProps extends apigateway.HttpIntegrationProps, ValidatorConfig {}

/** Defines a HTTP(S) integration. */
export class HttpIntegration extends Integration {

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

  /** Selects the correct integration type configuration. */
  private static selectIntegrationType(proxy?: boolean): apigateway.IntegrationType {
    if (proxy === false) {
      return apigateway.IntegrationType.HTTP;
    }
    // default to proxy as CDK does
    return apigateway.IntegrationType.HTTP_PROXY;
  }

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
      type: InternalIntegrationType.HTTP,
      validator: props?.validator,
    };

    super(integration, config);
  }


}
