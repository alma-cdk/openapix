import { Construct } from 'constructs';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { Duration } from 'aws-cdk-lib';
import { Id, AuthorizerConfig } from './authorizer';
import { XAmazonApigatewayAuthType } from '../x-amazon-apigateway/authtype';
import { XAmazonApigatewayAuthorizer } from '../x-amazon-apigateway/authorizer';

export interface CognitoUserPoolsAuthorizerProps {
  cognitoUserPools: IUserPool[];
  resultsCacheTtl?: Duration;
}

export class CognitoUserPoolsAuthorizer extends Construct implements AuthorizerConfig {

  public readonly id: Id;
  readonly xAmazonApigatewayAuthtype: XAmazonApigatewayAuthType;
  readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;

  constructor(scope: Construct, id: Id, props: CognitoUserPoolsAuthorizerProps) {
    const { cognitoUserPools, resultsCacheTtl } = props;
    super(scope, id);

    this.id = id;
    this.xAmazonApigatewayAuthtype = 'cognito_user_pools';
    this.xAmazonApigatewayAuthorizer = {
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





