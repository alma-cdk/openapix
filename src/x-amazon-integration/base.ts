import * as apigateway from '@aws-cdk/aws-apigateway';


export type XAmazonIntegrationType =
| 'http'
| 'http_proxy'
| 'aws_proxy'
| 'aws'
| 'mock'


// https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html
// TODO this is missing all sorts of things
export interface XAmazonIntegration {
  readonly type: apigateway.IntegrationType;
  readonly uri: string;
  readonly httpMethod: string;
  readonly credentials?: string;
  readonly requestTemplates?: Record<string, string>;
  readonly requestParameters?: Record<string, string>;
  readonly cacheNamespace?: string;
  readonly cacheKeyParameters?: any[];
  readonly responses?: Record<string, XAmazonIntegrationResponse>;
}

export interface XAmazonIntegrationResponse {
  readonly statusCode: string;
  readonly responseParameters?: Record<string, string>;
  readonly responseTemplates?: Record<string, string>;
}


export function mapIntegrationOptionsToXAmazonIntegration(props: apigateway.IntegrationProps): XAmazonIntegration {

  return {
    type: props.type,
    uri: props.uri,
    httpMethod: props.integrationHttpMethod || 'POST',
    credentials: props.options?.credentialsRole?.roleArn,
    requestTemplates: props.options?.requestTemplates,
    requestParameters: props.options?.requestParameters,
    cacheNamespace: props.options?.cacheNamespace,
    responses: (function() {
      const responses: Record<string, XAmazonIntegrationResponse> = {};
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
