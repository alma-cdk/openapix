import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import { generateLambdaXAmazonIntegration } from '../x-amazon-integration/lambda';
import { OpenApiXIntegration } from './base';

export class OpenApiXLambda extends OpenApiXIntegration {
  constructor(scope: cdk.Construct, fn: lambda.IFunction, props?: apigateway.LambdaIntegrationOptions) {
    super();
    const integrationOptions = props || {};
    this.xAmazonIntegration = generateLambdaXAmazonIntegration(scope, fn, integrationOptions);
  }
}
