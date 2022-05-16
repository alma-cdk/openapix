import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { Integration } from './base';


export class MockIntegration extends Integration {
  constructor(scope: Construct, props?: apigateway.IntegrationProps) {
    super();
    this.xAmazonIntegration = generateAwsServiceXMockIntegration(scope, props);
  }
}
