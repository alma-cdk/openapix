import { Construct } from 'constructs';
import { IntegrationProps, IntegrationType } from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig } from './base';

export interface MockIntegrationProps extends IntegrationProps {
  readonly validator?: string;
}

export class MockIntegration extends BaseIntegration {
  constructor(_: Construct, props?: MockIntegrationProps) {

    const integration: IntegrationProps = {
      type: IntegrationType.MOCK,
      integrationHttpMethod: props?.integrationHttpMethod,
      options: props?.options,
    };

    const config: IntegrationConfig = {
      validatorId: props?.validator,
    };

    super(integration, config);
  }
}
