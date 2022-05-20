import { ApiDefinition, EndpointType, IRestApi, RestApi, RestApiProps, SpecRestApi } from 'aws-cdk-lib/aws-apigateway';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Integration, InternalIntegrationType } from '../integration/base';
import { LambdaIntegration } from '../integration/lambda';
import { BasePropsWithDefaults, OpenApiProps, Paths } from './api-props';
import { OpenApiDefinition } from './definition';


export class OpenApi extends RestApi {
  public readonly api: IRestApi;
  public readonly apiDefinition: ApiDefinition;
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
   *       'GET': new openapix.MockIntegration(this),
   *     },
   *     '/bar': {
   *       'POST': new openapix.LambdaIntegration(this, fn),
   *     },
   *   }
   * })
   *
   */
  constructor(scope: Construct, id: string, props: OpenApiProps) {
    super(scope, id, props.restApiProps);
    this.baseProps = this.setBasePropsWithDefaults(props);
    this.restApiProps = props.restApiProps;

    this.apiDefinition = new OpenApiDefinition(this, this.baseProps);

    const api = new SpecRestApi(this, 'SpecRestApi', {
      apiDefinition: this.apiDefinition,
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
      upload: props.upload === false ? false : true,
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
