import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function generateHttpXAmazonIntegration(_: Construct, url: string, props?: apigateway.HttpIntegrationProps): XAmazonIntegration {
  return mapIntegrationOptionsToXAmazonIntegration({
    type: props?.proxy === false ? apigateway.IntegrationType.HTTP : apigateway.IntegrationType.HTTP_PROXY, // default to proxy as CDK does
    uri: url,
    integrationHttpMethod: props?.httpMethod || 'GET',
    options: props?.options || {},
  });
}
