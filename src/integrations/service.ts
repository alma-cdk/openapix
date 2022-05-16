import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateServiceXAmazonIntegration } from '../x-amazon-integration/service';
import { OpenApiXIntegration } from './base';


export class OpenApiXService extends OpenApiXIntegration {
  constructor(scope: Construct, props: apigateway.AwsIntegrationProps) {
    super();
    this.xAmazonIntegration = generateServiceXAmazonIntegration(scope, props);
  }
}
