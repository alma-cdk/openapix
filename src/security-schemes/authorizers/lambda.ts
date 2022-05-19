import { Construct } from 'constructs';
import { XAmazonApigatewayAuthType } from '../../x-amazon-apigateway/authtype';
import { XAmazonApigatewayAuthorizer } from '../../x-amazon-apigateway/authorizer';
import { Duration } from 'aws-cdk-lib';
import { Id, Authorizer } from './xauthorizer';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { LambdaInvocation } from '../../lambda-invocation';

export interface LambdaAuthorizerProps {
  fn: IFunction;

  /**
   * @example
   * apigateway.IdentitySource.header('Authorization')
   */
  identitySource: string;
  type: 'token'|'request';
  authtype: string;
  resultsCacheTtl?: Duration;
}

export class LambdaAuthorizer extends Construct implements Authorizer {

  public readonly id: Id;
  readonly 'x-amazon-apigateway-authtype': XAmazonApigatewayAuthType;
  readonly 'x-amazon-apigateway-authorizer': XAmazonApigatewayAuthorizer;

  constructor(scope: Construct, id: Id, props: LambdaAuthorizerProps) {
    const { fn, identitySource, type, authtype, resultsCacheTtl } = props;
    super(scope, id);

    this.id = id;
    this['x-amazon-apigateway-authtype'] = authtype;
    this['x-amazon-apigateway-authorizer'] = {
      type,
      authorizerUri: new LambdaInvocation(scope, fn).uri,
      identitySource,
    }

    if (typeof resultsCacheTtl !== 'undefined') {
      this['x-amazon-apigateway-authorizer'].authorizerResultTtlInSeconds = resultsCacheTtl.toSeconds();
    }
  }
}





