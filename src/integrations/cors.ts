import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { Integration } from './base';
import { readFileSync } from 'fs';
import { addError } from '../errors/add';
const template = readFileSync(__dirname+'/cors.vtl', 'utf-8');

export interface CorsIntegrationProps {
  readonly validator?: string;
  readonly headers: string,
  readonly origins: string,
  readonly methods: string,
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

    const { headers, origins, methods } = props;

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
              'application/json': this.defineTemplate(origins),
            },
          },
        ],
      },
    });
  }

  private defineTemplate(origins: string): string {
    const originsForTmpl = origins.split(',').map(o => `"${o}"`).join(',');
    const tmpl = template.replace('__DOMAIN__', originsForTmpl);
    return tmpl;
  }

}


abstract class CorsSettingValue {
  public static ANY: string = '*';

  protected static errorMessage: string;

  public static from(scope: Construct, ...values: string[]): string {
    if (values.length < 1) {
      addError(scope, CorsSettingValue.errorMessage);
      return '';
    }
    return values.join(',');
  }
}

export class CorsOrigins extends CorsSettingValue {
  protected static errorMessage: string = 'CorsOrigins.fromList() call values must contain at least 1 origin';
}

export class CorsMethods extends CorsSettingValue {
  protected static errorMessage: string = 'CorsMethods.fromList() call values must contain at least 1 method';
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
export class CorsHeaders extends CorsSettingValue {
  protected static errorMessage: string = 'CorsHeaders.fromList() call values must contain at least 1 header';
}
