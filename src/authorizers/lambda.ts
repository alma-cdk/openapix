import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { Id, AuthorizerConfig } from './authorizer';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { LambdaInvocation } from '../lambda-invocation';
import { AuthType, Authorizer } from '../api/api-props';

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

export class LambdaAuthorizer extends Construct implements AuthorizerConfig {

  public readonly id: Id;
  readonly 'x-amazon-apigateway-authtype': AuthType;
  readonly 'x-amazon-apigateway-authorizer': Authorizer;

  constructor(scope: Construct, id: Id, props: LambdaAuthorizerProps) {
    const { fn, identitySource, type, authtype, resultsCacheTtl } = props;
    super(scope, id);

    this.id = id;
    this['x-amazon-apigateway-authtype'] = authtype;
    this['x-amazon-apigateway-authorizer'] = {
      type,
      authorizerUri: new LambdaInvocation(scope, fn).uri,
      identitySource,
      authorizerResultTtlInSeconds: (function(): number | undefined {
        if (typeof resultsCacheTtl !== 'undefined') {
          return resultsCacheTtl.toSeconds();
        }
        return undefined;
      }())
    }
  }
}





