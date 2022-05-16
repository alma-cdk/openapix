import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function generateServiceXAmazonIntegration(scope: Construct, integ: apigateway.AwsIntegrationProps): XAmazonIntegration {
  const region = integ.region || cdk.Stack.of(scope).region;

  return mapIntegrationOptionsToXAmazonIntegration({
    type: apigateway.IntegrationType.AWS,
    uri: `arn:aws:apigateway:${region}:${integ.service}:action/${integ.action}`,
    integrationHttpMethod: integ.integrationHttpMethod || 'POST',
    options: integ.options || {},
  });
}
