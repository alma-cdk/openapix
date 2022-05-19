import * as apigateway from 'aws-cdk-lib/aws-apigateway';


// TODO https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

// https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html
// TODO this is missing all sorts of things
export interface XAmazonApigatewayIntegration {
  readonly type: apigateway.IntegrationType;
  readonly uri: string;
  readonly httpMethod: string;
  readonly credentials?: string;
  readonly requestTemplates?: Record<string, string>;
  readonly requestParameters?: Record<string, string>;
  readonly cacheNamespace?: string;
  readonly cacheKeyParameters?: any[];
  readonly responses?: Record<string, XAmazonApigatewayIntegrationResponse>;
  readonly passthroughBehavior?: apigateway.PassthroughBehavior;
}

export interface XAmazonApigatewayIntegrationResponse {
  readonly statusCode: string;
  readonly responseParameters?: Record<string, string>;
  readonly responseTemplates?: Record<string, string>;
}
