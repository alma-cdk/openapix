import { EndpointType, SpecRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { AuthorizerConfig, LambdaAuthorizer } from '../authorizers';
import { Integration, InternalIntegrationType } from '../integration/base';
import { LambdaIntegration } from '../integration/lambda';
import { IDocument } from '../schema';
import { ApiDefinition } from './definition';
import { ApiProps, Methods, Paths } from './props';

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
      defaultIntegration: props.defaultIntegration,
    });

    super(scope, id, {
      apiDefinition: apiDefinition,
      endpointTypes: [EndpointType.REGIONAL],
      ...props.restApiProps,
    });

    // Allow the API Gateway to invoke given Lambda function integrations
    this.grantLambdaInvokes(props.paths);

    // Allow the API Gateway to invoke given Lambda authorizer integrations
    this.grantLambdaAuthorizerInvokes(props.authorizers);

    // Expose the processed OpenApi v3 document.
    // Mainly used for testing.
    this.document = apiDefinition.document;
  }


  /** Allow Lambda invocations to API Gateway instance principal */
  private grantLambdaInvokes(paths: Paths = {}): void {
    // get unique integration functions
    const integrations = [...new Map(Object.values(paths)
      .reduce((acc: (Integration | undefined)[], val: Methods) => val ? [...acc, ...Object.values(val)] : acc, [])
      .filter((val): val is LambdaIntegration => !!val && this.isLambdaIntegration(val) && !val.xAmazonApigatewayIntegration.credentials)
      .map(val => [val.fn.functionArn, val]),
    ).values()];

    integrations.forEach((integration) => {
      integration.grantFunctionInvoke(this, this.arnForExecuteApi());
    });
  }

  /** Allow Lambda authorizer invocations to API Gateway instance principal */
  private grantLambdaAuthorizerInvokes(authorizers?: AuthorizerConfig[]): void {
    if (!authorizers) {
      return;
    }

    // filter duplicate authorizers
    const uniqueLambdaAuthorizers = [...new Map(Object.values(authorizers)
      .filter((val): val is LambdaAuthorizer => {
        return val instanceof LambdaAuthorizer && !val.xAmazonApigatewayAuthorizer.authorizerCredentials;
      })
      .map(val => [val.fn.functionArn, val]),
    ).values()];

    uniqueLambdaAuthorizers.forEach(authorizer => {
      authorizer.grantFunctionInvoke(this);
    });
  }

  /** Determine if the integration internal type is `LAMBDA`. */
  private isLambdaIntegration(integration: Integration): integration is LambdaIntegration {
    return integration.type === InternalIntegrationType.LAMBDA;
  }
}
