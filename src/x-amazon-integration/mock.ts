import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function generateAwsServiceXMockIntegration(_: cdk.Construct, integ?: apigateway.IntegrationProps): XAmazonIntegration {
  return mapIntegrationOptionsToXAmazonIntegration({
    type: apigateway.IntegrationType.MOCK,
    integrationHttpMethod: integ?.integrationHttpMethod,
    options: integ?.options || {},
  });
}
