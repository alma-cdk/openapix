import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { generateServiceXAmazonIntegration } from '../x-amazon-integration/service';
import { OpenApiXIntegration } from './base';


export class OpenApiXService extends OpenApiXIntegration {
  constructor(scope: cdk.Construct, props: apigateway.AwsIntegrationProps) {
    super();
    this.xAmazonIntegration = generateServiceXAmazonIntegration(scope, props);
  }
}
