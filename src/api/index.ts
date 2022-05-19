import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { omit } from 'lodash';
import { OpenApiDefinition, OpenApiDefinitionProps } from '../definition';
import { Integration } from '../integrations/base';
import { LambdaIntegration } from '../integrations/lambda';

export interface OpenApiProps extends OpenApiDefinitionProps {
  readonly restApiProps: apigateway.RestApiBaseProps;
}

export class OpenApi extends Construct {
  public readonly api: apigateway.IRestApi;

  constructor(scope: Construct, id: string, props: OpenApiProps) {
    super(scope, id);

    const { restApiProps } = props;

    const apiDefinition = new OpenApiDefinition(this, omit(props, 'restApiProps'));

    const api = new apigateway.SpecRestApi(this, 'SpecRestApi', {
      apiDefinition,
      endpointTypes: [apigateway.EndpointType.REGIONAL],
      ...restApiProps,
    });

    this.api = api;

    this.grantLambdaInvokes(props.integrations);
  }

  grantLambdaInvokes(pathIntegrations: OpenApiDefinitionProps['integrations']) {
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
        const isLambdaIntegration = (integration: LambdaIntegration | Integration):integration is LambdaIntegration => {
          return !!(integration as LambdaIntegration).fn;
        };

        if (isLambdaIntegration(methodIntegration)) {
          methodIntegration.fn.grantInvoke(apiGatewayInstance);
        }
      });
    });
  }
}
