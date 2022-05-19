import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig } from './base';
import { LambdaInvocation } from '../lambda-invocation';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { IntegrationProps } from 'aws-cdk-lib/aws-apigateway';

export interface LambdaIntegrationOptions extends apigateway.LambdaIntegrationOptions {
  readonly validator?: string;
}

export class LambdaIntegration extends BaseIntegration {

  constructor(scope: Construct, fn: IFunction, props?: LambdaIntegrationOptions) {

    const lambdaInvocation = new LambdaInvocation(scope, fn);

    const integration: IntegrationProps = {
      type: LambdaIntegration.selectIntegrationType(props?.proxy),
      uri: lambdaInvocation.uri,
      integrationHttpMethod: 'POST',
      options: props,
    };

    const config: IntegrationConfig = {
      validatorId: props?.validator,
    };

    super(integration, config);
  }

  private static selectIntegrationType(proxy?: boolean): apigateway.IntegrationType {
    if (proxy === false) {
      return apigateway.IntegrationType.AWS;
    }

    // default to proxy as CDK does
    return apigateway.IntegrationType.AWS_PROXY;
  }

}
