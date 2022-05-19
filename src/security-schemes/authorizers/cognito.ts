import { Construct } from 'constructs';
import { XAmazonApigatewayAuthType } from '../../x-amazon-apigateway/authtype';
import { XAmazonApigatewayAuthorizer } from '../../x-amazon-apigateway/authorizer';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { Duration } from 'aws-cdk-lib';
import { Id, Authorizer } from './xauthorizer';

export interface CognitoUserPoolsAuthorizerProps {
  cognitoUserPools: IUserPool[];
  resultsCacheTtl?: Duration;
}

export type AuthType = Readonly<XAmazonApigatewayAuthType>;
export type Authorizer = Readonly<XAmazonApigatewayAuthorizer>;

export class CognitoUserPoolsAuthorizer extends Construct implements Authorizer {

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





