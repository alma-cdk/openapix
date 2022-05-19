import * as apigateway from 'aws-cdk-lib/aws-apigateway';


// TODO https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

// https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html
// TODO this is missing all sorts of things
export interface XAmazonApigatewayIntegration {
  type: apigateway.IntegrationType;
  uri: string;
  httpMethod: string;
  credentials?: string;
  requestTemplates?: Record<string, string>;
  requestParameters?: Record<string, string>;
  cacheNamespace?: string;
  cacheKeyParameters?: any[];
  responses?: Record<string, XAmazonApigatewayIntegrationResponse>;
  passthroughBehavior?: apigateway.PassthroughBehavior;
}

export interface XAmazonApigatewayIntegrationResponse {
  statusCode: string;
  responseParameters?: Record<string, string>;
  responseTemplates?: Record<string, string>;
}
