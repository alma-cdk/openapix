import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateAwsServiceXMockIntegration } from '../x-amazon-integration/mock';
import { Integration } from './base';
import { readFileSync } from 'fs';
import { addError } from '../errors/add';
const template = readFileSync(__dirname+'/cors.vtl', 'utf-8');

export interface CorsIntegrationProps {
  validator?: string;
  headers: CorsHeaders,
  origins: CorsOrigins,
  methods: CorsMethods,
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

    const origins = props.origins.value;
    const tmpl = template.replace('__DOMAIN__', origins);

    const methods = props.methods.value;
    const headers = props.headers.value;

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

  /*
  private formatOriginsForTemplate(origins: string[]): string {
    if (origins.length < 1) return '*';
    return origins.map(o => `"${o}"`).join(', ');
  }
  */

}


class CorsSettingValue {
  public static ANY: CorsSettingValue = new CorsSettingValue('*');

  protected static errorMessage: string;

  public static from(scope: Construct, ...values: string[]): CorsSettingValue {
    if (values.length < 1) {
      addError(scope, CorsSettingValue.errorMessage);
      return new CorsSettingValue('');
    }
    return new CorsSettingValue(values.join(','));
  }

  public readonly value: string;

  protected constructor(value: string) {
    this.value = value;
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
