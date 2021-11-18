import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function generateServiceXAmazonIntegration(scope: cdk.Construct, integ: apigateway.AwsIntegrationProps): XAmazonIntegration {
  const region = integ.region || cdk.Stack.of(scope).region;

  return mapIntegrationOptionsToXAmazonIntegration({
    type: apigateway.IntegrationType.AWS,
    uri: `arn:aws:apigateway:${region}:${integ.service}:action/${integ.action}`,
    integrationHttpMethod: integ.integrationHttpMethod || 'POST',
    options: integ.options || {},
  });
}
