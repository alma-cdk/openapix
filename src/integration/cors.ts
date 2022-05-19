import { Construct } from 'constructs';
import { IntegrationProps, IntegrationType } from 'aws-cdk-lib/aws-apigateway';
import { BaseIntegration, IntegrationConfig } from './base';
import { readFileSync } from 'fs';
const template = readFileSync(__dirname+'/cors.vtl', 'utf-8');

export interface CorsIntegrationProps {
  readonly validator?: string;
  readonly headers: string,
  readonly origins: string,
  readonly methods: string,
}
export class CorsIntegration extends BaseIntegration {
  constructor(_: Construct, props: CorsIntegrationProps) {

    const { headers, origins, methods } = props;

    const integration: IntegrationProps = {
      type: IntegrationType.MOCK,
      options: {
        integrationResponses: [
          {
            statusCode: '200',
            responseParameters: {
              'method.response.header.Access-Control-Allow-Methods': methods,
              'method.response.header.Access-Control-Allow-Headers': headers,
            },
            responseTemplates: {
              'application/json': CorsIntegration.defineTemplate(origins),
            },
          },
        ],
      },
    };

    const config: IntegrationConfig = {
      validatorId: props?.validator,
    };

    super(integration, config);
  }

  private static defineTemplate(origins: string): string {
    const originsForTmpl = origins.split(',').map(o => `"${o}"`).join(',');
    const tmpl = template.replace('__DOMAIN__', originsForTmpl);
    return tmpl;
  }
}
