import { IntegrationOptions, IntegrationProps, IntegrationType } from 'aws-cdk-lib/aws-apigateway';
import { Integration, IntegrationConfig, InternalIntegrationType, ValidatorConfig } from './base';

export interface MockIntegrationProps extends IntegrationOptions, ValidatorConfig {}

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
  constructor(props: MockIntegrationProps = {}) {

    const integration: IntegrationProps = {
      type: IntegrationType.MOCK,
      options: props,
    };

    const config: IntegrationConfig = {
      type: InternalIntegrationType.MOCK,
      validator: props.validator,
    };

    super(integration, config);
  }
}
