import { EndpointType, IRestApi, SpecRestApi } from 'aws-cdk-lib/aws-apigateway';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Integration, InternalIntegrationType } from '../integration/base';
import { LambdaIntegration } from '../integration/lambda';
import { IDocument } from '../schema';
import { ApiDefinition } from './definition';
import { ApiProps, Paths } from './props';

/**
 * AWS API Gateway REST API defined with OpenApi v3 schema.
 */
export class Api extends SpecRestApi {

  /**
   * The final OpenApi v3 document used to generate the AWS API Gateway.
   */
  public readonly document: IDocument;


  /**
   * Define a new API Gateway REST API using OpenApi v3 Schema definition.
   *
   * @example
   * const fn: IFunction;
   *
   * new openapix.Api(this, 'MyApi', {
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
  constructor(scope: Construct, id: string, props: ApiProps) {

    const apiDefinition = new ApiDefinition(scope, {
      source: props.source,
      upload: props.upload === true,
      paths: props.paths || {},
      authorizers: props.authorizers || [],
      validators: props.validators || {},
      defaultCors: props.defaultCors,
      injections: props.injections || {},
      rejections: props.rejections || [],
      rejectionsDeep: props.rejectionsDeep || [],
    });

    super(scope, id, {
      apiDefinition: apiDefinition,
      endpointTypes: [EndpointType.REGIONAL],
      ...props.restApiProps,
    });

    // Allow the API Gateway to invoke given Lambda function integrations
    this.grantLambdaInvokes(props.paths);

    // Expose the processed OpenApi v3 document.
    // Mainly used for testing.
    this.document = apiDefinition.document;
  }


  /** Allow Lambda invocations to API Gateway instance principal. */
  private grantLambdaInvokes(paths: Paths = {}): void {

    const apiGatewayPrincipal = this.getApiGatewayPrincipal(this);

    // loop through paths
    Object.keys(paths).forEach(path => {
      const methodIntegrations = paths[path];

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
        conditions: {
          ArnLike: {
            'aws:SourceArn': `${api.arnForExecuteApi}/*`,
          },
        },
      },
    );
  }

  /** Determine if the integration internal type is `LAMBDA`. */
  private isLambdaIntegration(integration: Integration): integration is LambdaIntegration {
    return integration.type === InternalIntegrationType.LAMBDA;
  }
}
