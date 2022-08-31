import { Duration, Stack } from 'aws-cdk-lib';
import { IRestApi } from 'aws-cdk-lib/aws-apigateway';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Function, IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { LambdaInvocation } from '../lambda-invocation';
import { XAmazonApigatewayAuthorizer } from '../x-amazon-apigateway/authorizer';
import { XAmazonApigatewayAuthType } from '../x-amazon-apigateway/authtype';
import { Id } from './authorizer';

export interface LambdaAuthorizerProps {

  readonly fn: IFunction;

  /**
   * @example
   * apigateway.IdentitySource.header('Authorization')
   */
  readonly identitySource: string;

  readonly type: 'token'|'request';

  readonly authType: string;

  readonly resultsCacheTtl?: Duration;
}

// implements AuthorizerConfig ... JSII doesn't like
export class LambdaAuthorizer extends Construct {

  public readonly id: Id;
  readonly fn: IFunction;
  readonly xAmazonApigatewayAuthtype: XAmazonApigatewayAuthType;
  readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;

  constructor(scope: Construct, id: Id, props: LambdaAuthorizerProps) {
    const { fn, identitySource, type, authType: authtype, resultsCacheTtl } = props;
    super(scope, id);

    this.id = id;
    this.fn = fn;
    this.xAmazonApigatewayAuthtype = authtype;
    this.xAmazonApigatewayAuthorizer = {
      type,
      authorizerUri: new LambdaInvocation(scope, fn).uri,
      identitySource,
      authorizerResultTtlInSeconds: (function(): number | undefined {
        if (typeof resultsCacheTtl !== 'undefined') {
          return resultsCacheTtl.toSeconds();
        }
        return undefined;
      }()),
    };
  }

  /**
   * Allow Lambda invoke action to be performed by given identity.
   *
   * The ARN format for authorizers is different compared to integrations when granting permissions,
   * ex. arn:aws:execute-api:us-east-1:123456789012:api-id/authorizers/authorizer-id
  */
  public grantFunctionInvoke(api: IRestApi): void {
    /**
     * if the lambda functions are created in separate stacks, circular dependencies appear
     * when we grant function invoke permissions directly. This is a hacky way to avoid the issue
     */
    const fn = Function.fromFunctionAttributes(this, `ImportFunction${this.id}`,
      {
        functionArn: this.fn.functionArn,
        sameEnvironment: true,
      });

    const authorizerArn = Stack.of(this).formatArn({
      service: 'execute-api',
      resource: api.restApiId,
      resourceName: 'authorizers/*',
    });

    fn.grantInvoke(new ServicePrincipal('apigateway.amazonaws.com',
      {
        conditions: {
          ArnLike: {
            'aws:SourceArn': authorizerArn,
          },
        },
      },
    ));
  }
}