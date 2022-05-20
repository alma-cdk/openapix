import { IntegrationProps, IntegrationType } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { Integration, IntegrationConfig, InternalIntegrationType, ValidatorConfig } from './base';

export interface MockIntegrationProps extends IntegrationProps, ValidatorConfig {}

/** Defines Mock integration. */
export class MockIntegration extends Integration {

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
      type: InternalIntegrationType.MOCK,
      validator: props?.validator,
    };

    super(integration, config);
  }
}
