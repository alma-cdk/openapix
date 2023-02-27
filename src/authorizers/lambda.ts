import { Duration, Stack } from 'aws-cdk-lib';
import { IRestApi } from 'aws-cdk-lib/aws-apigateway';
import { CfnPermission, IFunction } from 'aws-cdk-lib/aws-lambda';
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
    const authorizerArn = Stack.of(this).formatArn({
      service: 'execute-api',
      resource: api.restApiId,
      resourceName: 'authorizers/*',
    });

    /**
     * using Lambda-constructs grant-functions cause circular dependencies if they are defined in different stacks
     */
    new CfnPermission(api, `InvokePermissionForAuthorizer${this.fn.node.id}`, {
      principal: 'apigateway.amazonaws.com',
      action: 'lambda:InvokeFunction',
      functionName: this.fn.functionName,
      sourceArn: authorizerArn,
    });
  }
}