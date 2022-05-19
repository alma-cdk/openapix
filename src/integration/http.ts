import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig } from './base';
import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';

export interface HttpIntegrationProps extends apigateway.HttpIntegrationProps {
  readonly validator?: string;
}

export class HttpIntegration extends BaseIntegration {
  constructor(_: Construct, url: string, props?: HttpIntegrationProps) {

    const integration: IntegrationProps = {
      type: HttpIntegration.selectIntegrationType(props?.proxy),
      uri: url,
      integrationHttpMethod: HttpIntegration.selectIntegrationHttpMethod(props?.httpMethod),
      options: props?.options,
    };

    const config: IntegrationConfig = {
      validatorId: props?.validator,
    }

    super(integration, config);
  }

  private static selectIntegrationType(proxy?: boolean): apigateway.IntegrationType {
    if (proxy === false) {
      return apigateway.IntegrationType.HTTP;
    }
    // default to proxy as CDK does
    return apigateway.IntegrationType.HTTP_PROXY;
  }

  private static selectIntegrationHttpMethod(httpMethod?: string): string {
    if (typeof httpMethod === 'string' && httpMethod.length > 0) {
      return httpMethod;
    }

    return 'GET';
  }


}
