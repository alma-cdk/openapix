import { Construct } from 'constructs';
import { IntegrationProps, IntegrationType, AwsIntegrationProps as CdkAwsIntegrationProps } from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig } from './base';
import { Stack } from 'aws-cdk-lib';

export interface AwsIntegrationProps extends CdkAwsIntegrationProps {
  readonly validator?: string;
}

export class MockIntegration extends BaseIntegration {
  constructor(scope: Construct, props: AwsIntegrationProps) {

    const integration: IntegrationProps = {
      type: IntegrationType.AWS,
      uri: MockIntegration.resolveUri(scope, props),
      integrationHttpMethod: props.integrationHttpMethod || 'POST',
      options: props.options,
    };

    const config: IntegrationConfig = {
      validatorId: props.validator,
    };

    super(integration, config);
  }

  private static resolveUri(scope: Construct, props: AwsIntegrationProps): string {
    const region = props.region || Stack.of(scope).region;
    return `arn:aws:apigateway:${region}:${props.service}:action/${props.action}`;
  }
}
