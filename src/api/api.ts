import { EndpointType, IRestApi, RestApiProps, SpecRestApi } from 'aws-cdk-lib/aws-apigateway';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Integration, InternalIntegrationType } from '../integration/base';
import { LambdaIntegration } from '../integration/lambda';
import { BasePropsWithDefaults, OpenApiProps, Paths } from './api-props';
import { OpenApiDefinition } from './definition';


export class OpenApi extends Construct {
  public readonly api: IRestApi;
  public readonly schema: any;
  private readonly baseProps: BasePropsWithDefaults;
  private readonly restApiProps?: RestApiProps;

  /**
   * Define a new API Gateway REST API using OpenApi v3 Schema definition.
   *
   * @example
   * const fn: IFunction;
   *
   * new openapix.OpenApi(this, 'MyApi', {
   *   source: './schema.yaml',
   *   paths: {
   *     '/foo': {
   *       get: new openapix.MockIntegration(this),
   *     },
   *     '/bar': {
   *       post: new openapix.LambdaIntegration(this, fn),
   *     },
   *   }
   * })
   *
   */
  constructor(scope: Construct, id: string, props: OpenApiProps) {
    super(scope, id);
    this.baseProps = this.setBasePropsWithDefaults(props);
    this.restApiProps = props.restApiProps;

    const apiDefinition = new OpenApiDefinition(this, this.baseProps);

    this.schema = apiDefinition.schema;

    const api = new SpecRestApi(this, 'SpecRestApi', {
      apiDefinition: apiDefinition,
      endpointTypes: [EndpointType.REGIONAL],
      ...this.restApiProps,
    });

    this.api = api;

    this.grantLambdaInvokes(this.baseProps.paths);
  }

  /** Sets baseProps with default values. */
  private setBasePropsWithDefaults(props: OpenApiProps): BasePropsWithDefaults {
    return {
      source: props.source,
      upload: props.upload === true,
      paths: props.paths || {},
      authorizers: props.authorizers || [],
      validators: props.validators || {},
      defaultCors: props.defaultCors,
      injections: props.injections || {},
      rejections: props.rejections || [],
      rejectionsDeep: props.rejectionsDeep || [],
    };
  }

  /** Allow Lambda invocations to API Gateway instance principal. */
  private grantLambdaInvokes(pathIntegrations: Paths): void {
    if (!pathIntegrations) return;

    const apiGatewayPrincipal = this.getApiGatewayPrincipal(this.api);

    // loop through paths
    Object.keys(pathIntegrations).forEach(path => {
      const methodIntegrations = pathIntegrations[path];

      // loop through methods
      Object.keys(methodIntegrations).forEach(method => {
        const methodIntegration = methodIntegrations[method];
        if (this.isLambdaIntegration(methodIntegration)) {
          methodIntegration.grantFunctionInvoke(apiGatewayPrincipal);
        }
      });
    });
  }

  /** Resolve ARN Service Principal for given API Gateway instance. */
  private getApiGatewayPrincipal(api: IRestApi): ServicePrincipal {
    return new ServicePrincipal(
      'apigateway.amazonaws.com',
      {
        conditions: [
          {
            ArnLike: {
              'AWS:SourceArn': `${api.arnForExecuteApi}/*`,
            },
          },
        ],
      },
    );
  }

  /** Determine if the integration internal type is `LAMBDA`. */
  private isLambdaIntegration(integration: Integration): integration is LambdaIntegration {
    return integration.type === InternalIntegrationType.LAMBDA;
  }
}
