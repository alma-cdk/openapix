import { Construct } from 'constructs';
import { IntegrationProps, IntegrationType } from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig, ValidatorConfig } from './base';

export interface MockIntegrationProps extends IntegrationProps, ValidatorConfig {}

/** Defines Mock integration. */
export class MockIntegration extends BaseIntegration {

  /**
   * Defines Mock integration.
   *
   * @example
   * '/mock': {
   *   'GET': new openapix.MockIntegration(this),
   * },
   */
  constructor(_: Construct, props?: MockIntegrationProps) {

    const integration: IntegrationProps = {
      type: IntegrationType.MOCK,
      integrationHttpMethod: props?.integrationHttpMethod,
      options: props?.options,
    };

    const config: IntegrationConfig = {
      validator: props?.validator,
    };

    super(integration, config);
  }
}
