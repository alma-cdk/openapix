import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { XAmazonApigatewayIntegration, XAmazonApigatewayIntegrationResponse } from '../x-amazon-apigateway/integration';



export function mapIntegrationOptionsToXAmazonIntegration(props: apigateway.IntegrationProps): XAmazonApigatewayIntegration {

  return {
    type: props.type,
    uri: props.uri,
    httpMethod: props.integrationHttpMethod || 'POST',
    credentials: props.options?.credentialsRole?.roleArn,
    requestTemplates: props.options?.requestTemplates,
    requestParameters: props.options?.requestParameters,
    cacheNamespace: props.options?.cacheNamespace,
    passthroughBehavior: props.options?.passthroughBehavior,
    responses: (function() {
      const responses: Record<string, XAmazonApigatewayIntegrationResponse> = {};
      props.options?.integrationResponses?.forEach(resp => {
        if (typeof resp.selectionPattern !== 'string') return;
        responses[resp.selectionPattern] = {
          statusCode: resp.statusCode,
          responseParameters: resp.responseParameters,
          responseTemplates: resp.responseTemplates,
        };
      });
      return responses;
    }()),
  };
}
