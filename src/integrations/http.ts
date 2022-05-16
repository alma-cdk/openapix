import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateHttpXAmazonIntegration } from '../x-amazon-integration/http';
import { Integration } from './base';


export class HttpIntegration extends Integration {
  constructor(scope: Construct, url: string, props?: apigateway.HttpIntegrationProps) {
    super();
    this.xAmazonIntegration = generateHttpXAmazonIntegration(scope, url, props);
  }
}
