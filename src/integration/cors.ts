import { Construct } from 'constructs';
import { IntegrationProps, IntegrationType } from 'aws-cdk-lib/aws-apigateway';
import { Integration, IntegrationConfig, InternalIntegrationType, ValidatorConfig } from './base';
import { readFileSync } from 'fs';
const template = readFileSync(__dirname+'/cors.vtl', 'utf-8');

export interface CorsIntegrationProps extends ValidatorConfig {
  readonly headers: string,
  readonly origins: string,
  readonly methods: string,
}

/**
 * Defines `OPTIONS` integration used in Cross-Origin Resource Sharing (CORS).
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html
 * @see https://medium.com/@srikanth650/use-api-gateway-with-mock-integration-to-allow-cors-from-multiple-origins-bdcb431d07d3
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html#mapping-response-parameters
 */
export class CorsIntegration extends Integration {

  /**
   * Defines `OPTIONS` integration used in Cross-Origin Resource Sharing (CORS).
   *
   * @example
   * '/bar': {
   *   'OPTIONS': new openapix.CorsIntegration(this, {
   *     headers: 'Content-Type,X-Amz-Date,Authorization',
   *     origins: '*',
   *     methods: 'OPTIONS,GET',
   *   }),
   * },
   */
  constructor(_: Construct, props: CorsIntegrationProps) {

    const { headers, origins, methods } = props;

    const integration: IntegrationProps = {
      type: IntegrationType.MOCK,
      options: {
        integrationResponses: [
          {
            statusCode: '204',
            responseParameters: {
              'method.response.header.Access-Control-Allow-Methods': methods,
              'method.response.header.Access-Control-Allow-Headers': headers,
            },
            responseTemplates: {
              'application/json': CorsIntegration.buildTemplate(origins),
            },
          },
        ],
      },
    };

    const config: IntegrationConfig = {
      type: InternalIntegrationType.CORS,
      validator: props?.validator,
    };

    super(integration, config);
  }

  /** Build Apache Velocity (`.vtl`) template for CORS response. */
  private static buildTemplate(origins: string): string {
    const originsForTmpl = origins.split(',').map(o => `"${o}"`).join(',');
    const tmpl = template.replace('__DOMAIN__', originsForTmpl);
    return tmpl;
  }
}
