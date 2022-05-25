import { Duration } from 'aws-cdk-lib';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
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

export class LambdaAuthorizer extends Construct {

  public readonly id: Id;
  public readonly fn: IFunction;
  readonly xAmazonApigatewayAuthtype: XAmazonApigatewayAuthType;
  readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;

  constructor(scope: Construct, id: Id, props: LambdaAuthorizerProps) {
    const { fn, identitySource, type, authType: authtype, resultsCacheTtl } = props;
    super(scope, id);

    this.id = id;
    this.xAmazonApigatewayAuthtype = authtype;
    this.fn = fn;
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
}


