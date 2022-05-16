import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { generateLambdaXAmazonIntegration } from '../x-amazon-integration/lambda';
import { OpenApiXIntegration } from './base';

export class OpenApiXLambda extends OpenApiXIntegration {
  public readonly fn: lambda.IFunction;

  constructor(scope: Construct, fn: lambda.IFunction, props?: apigateway.LambdaIntegrationOptions) {
    super();
    const integrationOptions = props || {};
    this.fn = fn;
    this.xAmazonIntegration = generateLambdaXAmazonIntegration(scope, fn, integrationOptions);
  }
}
