import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { Integration } from './base';

export interface MockIntegrationProps extends apigateway.IntegrationProps {
  validator?: string;
}

export class MockIntegration extends Integration {
  constructor(scope: Construct, props?: MockIntegrationProps) {
    super();
    this.xAmazonApiGatewayRequestValidator = props?.validator;
    this.xAmazonIntegration = generateAwsServiceXMockIntegration(scope, props);
  }
}
