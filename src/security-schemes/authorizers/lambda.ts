import { Construct } from 'constructs';
import { XAmazonApigatewayAuthType } from '../interfaces/x-amazon-apigateway-authtype';
import { XAmazonApigatewayAuthorizer } from '../interfaces/x-amazon-apigateway-authorizer';
import { Duration } from 'aws-cdk-lib';
import { Id, XAuthorizer } from './xauthorizer';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { resolveLambdaIntegrationUri } from '../../x-amazon-integration/lambda';

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

export class LambdaAuthorizer extends Construct implements XAuthorizer {

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
      authorizerUri: resolveLambdaIntegrationUri(scope, fn),
      identitySource,
    }

    if (typeof resultsCacheTtl !== 'undefined') {
      this['x-amazon-apigateway-authorizer'].authorizerResultTtlInSeconds = resultsCacheTtl.toSeconds();
    }
  }
}





