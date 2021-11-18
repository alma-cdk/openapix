import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { OpenApiXIntegration } from './base';


export class OpenApiXMock extends OpenApiXIntegration {
  constructor(scope: cdk.Construct, props?: apigateway.IntegrationProps) {
    super();
    this.xAmazonIntegration = generateAwsServiceXMockIntegration(scope, props);
  }
}
