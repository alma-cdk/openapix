import { Construct } from 'constructs';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { Duration } from 'aws-cdk-lib';
import { Id, AuthorizerConfig } from './authorizer';
import { AuthType, Authorizer } from '../api/api-props';

export interface CognitoUserPoolsAuthorizerProps {
  cognitoUserPools: IUserPool[];
  resultsCacheTtl?: Duration;
}

export class CognitoUserPoolsAuthorizer extends Construct implements AuthorizerConfig {

  public readonly id: Id;
  readonly 'x-amazon-apigateway-authtype': AuthType;
  readonly 'x-amazon-apigateway-authorizer': Authorizer;

  constructor(scope: Construct, id: Id, props: CognitoUserPoolsAuthorizerProps) {
    const { cognitoUserPools, resultsCacheTtl } = props;
    super(scope, id);

    this.id = id;
    this['x-amazon-apigateway-authtype'] = 'cognito_user_pools';
    this['x-amazon-apigateway-authorizer'] = {
      type: 'cognito_user_pools',
      providerARNs: cognitoUserPools.map(p => p.userPoolArn),
      authorizerResultTtlInSeconds: (function(): number | undefined {
        if (typeof resultsCacheTtl !== 'undefined') {
          return resultsCacheTtl.toSeconds()
        }
        return undefined
      }())
    }
  }
}





