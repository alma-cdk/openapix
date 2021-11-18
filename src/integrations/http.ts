import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { generateHttpXAmazonIntegration } from '../x-amazon-integration/http';
import { OpenApiXIntegration } from './base';


export class OpenApiXHttp extends OpenApiXIntegration {
  constructor(scope: cdk.Construct, url: string, props?: apigateway.HttpIntegrationProps) {
    super();
    this.xAmazonIntegration = generateHttpXAmazonIntegration(scope, url, props);
  }
}
