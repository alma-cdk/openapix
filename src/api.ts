import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { omit } from 'lodash';
import { OpenApiXDefinition, OpenApiXDefinitionProps } from './definition';
import { OpenApiXIntegration } from './integrations/base';
import { OpenApiXLambda } from './integrations/lambda';

export interface OpenApiXProps extends OpenApiXDefinitionProps {
  readonly restApiProps: apigateway.RestApiBaseProps;
}

export class OpenApiX extends Construct {
  public readonly api: apigateway.IRestApi;

  constructor(scope: Construct, id: string, props: OpenApiXProps) {
    super(scope, id);

    const { restApiProps } = props;

    const apiDefinition = new OpenApiXDefinition(this, omit(props, 'restApiProps'));

    const api = new apigateway.SpecRestApi(this, 'SpecRestApi', {
      apiDefinition,
      ...restApiProps,
    });

    this.api = api;

    this.grantLambdaInvokes(props.integrations);
  }

  grantLambdaInvokes(pathIntegrations: OpenApiXDefinitionProps['integrations']) {
    if (!pathIntegrations) return;

    const apiGatewayInstance = new iam.ServicePrincipal(
      'apigateway.amazonaws.com',
      {
        conditions: [
          {
            ArnLike: {
              'AWS:SourceArn': `${this.api.arnForExecuteApi}/*`,
            },
          },
        ],
      },
    );

    Object.keys(pathIntegrations).forEach(path => {
      const methodIntegrations = pathIntegrations[path];
      Object.keys(methodIntegrations).forEach(method => {
        const methodIntegration = methodIntegrations[method];
        const isLambdaIntegration = (integration: OpenApiXLambda | OpenApiXIntegration):integration is OpenApiXLambda => {
          return !!(integration as OpenApiXLambda).fn;
        };

        if (isLambdaIntegration(methodIntegration)) {
          methodIntegration.fn.grantInvoke(apiGatewayInstance);
        }
      });
    });
  }
}
