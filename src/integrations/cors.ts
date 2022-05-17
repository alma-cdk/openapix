import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { Integration } from './base';
import { readFileSync } from 'fs';
const template = readFileSync(__dirname+'/cors.vtl', 'utf-8');

export interface CorsIntegrationProps {
  validator?: string;
  headers: string[],
  origins: string[],
  methods: string[],
}

/**
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html
 * @see https://medium.com/@srikanth650/use-api-gateway-with-mock-integration-to-allow-cors-from-multiple-origins-bdcb431d07d3
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html#mapping-response-parameters
 */
export class CorsIntegration extends Integration {
  constructor(scope: Construct, props: CorsIntegrationProps) {
    super();
    this.xAmazonApiGatewayRequestValidator = props.validator;

    const origins = this.formatOriginsForTemplate(props.origins);
    const tmpl = template.replace('__DOMAIN__', origins);

    const methods = this.formatMethodsValue(props.methods);
    const headers = this.formatHeadersValue(props.headers);

    this.xAmazonIntegration = generateAwsServiceXMockIntegration(scope, {
      type: apigateway.IntegrationType.MOCK,
      options: {
        integrationResponses: [
          {
            statusCode: '200',
            responseParameters: {
              'method.response.header.Access-Control-Allow-Methods': methods,
              'method.response.header.Access-Control-Allow-Headers': headers,
            },
            responseTemplates: {
              'application/json': tmpl,
            },
          },
        ],
      },
    });
  }

  private formatOriginsForTemplate(origins: string[]): string {
    if (origins.length < 1) return '*';
    return origins.map(o => `"${o}"`).join(', ');
  }

  private formatMethodsValue(methods: string[]): string {
    if (methods.length < 1) return '*';
    return methods.join(',');
  }

  private formatHeadersValue(headers: string[]): string {
    return headers.join(',');
  }
}


