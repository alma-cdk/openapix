import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function resolveLambdaIntegrationUri(scope: Construct, fn: lambda.IFunction): string {
  const region = cdk.Stack.of(scope).region;
  const arn = fn.functionArn;
  const uri = `arn:aws:apigateway:${region}:lambda:path/2015-03-31/functions/${arn}/invocations`;
  return uri;
}

export function generateLambdaXAmazonIntegration(
  scope: Construct,
  fn: lambda.IFunction,
  integOptions?: apigateway.LambdaIntegrationOptions,
): XAmazonIntegration {
  return mapIntegrationOptionsToXAmazonIntegration({
    type: integOptions?.proxy === false ? apigateway.IntegrationType.AWS : apigateway.IntegrationType.AWS_PROXY, // default to proxy as CDK does
    uri: resolveLambdaIntegrationUri(scope, fn),
    integrationHttpMethod: 'POST',
    options: integOptions,
  });
}
