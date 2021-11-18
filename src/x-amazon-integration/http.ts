import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function generateHttpXAmazonIntegration(_: cdk.Construct, url: string, props?: apigateway.HttpIntegrationProps): XAmazonIntegration {
  return mapIntegrationOptionsToXAmazonIntegration({
    type: props?.proxy === false ? apigateway.IntegrationType.HTTP : apigateway.IntegrationType.HTTP_PROXY, // default to proxy as CDK does
    uri: url,
    integrationHttpMethod: props?.httpMethod || 'GET',
    options: props?.options || {},
  });
}
