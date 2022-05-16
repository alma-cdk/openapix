import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { OpenApiXIntegration } from './base';


export class OpenApiXMock extends OpenApiXIntegration {
  constructor(scope: Construct, props?: apigateway.IntegrationProps) {
    super();
    this.xAmazonIntegration = generateAwsServiceXMockIntegration(scope, props);
  }
}
