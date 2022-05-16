import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { mapIntegrationOptionsToXAmazonIntegration, XAmazonIntegration } from './base';


export function generateAwsServiceXMockIntegration(_: Construct, integ?: apigateway.IntegrationProps): XAmazonIntegration {
  return mapIntegrationOptionsToXAmazonIntegration({
    type: apigateway.IntegrationType.MOCK,
    integrationHttpMethod: integ?.integrationHttpMethod,
    options: integ?.options || {},
  });
}
