import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateServiceXAmazonIntegration } from '../x-amazon-integration/service';
import { Integration } from './base';


export class AwsIntegration extends Integration {
  constructor(scope: Construct, props: apigateway.AwsIntegrationProps) {
    super();
    this.xAmazonIntegration = generateServiceXAmazonIntegration(scope, props);
  }
}
