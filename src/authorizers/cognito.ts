import { Duration } from 'aws-cdk-lib';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
import { Id } from './authorizer';
import { XAmazonApigatewayAuthorizer } from '../x-amazon-apigateway/authorizer';
import { XAmazonApigatewayAuthType } from '../x-amazon-apigateway/authtype';

export interface CognitoUserPoolsAuthorizerProps {
  readonly cognitoUserPools: IUserPool[];
  readonly resultsCacheTtl?: Duration;
}

// implements AuthorizerConfig ... JSII doesn't like
export class CognitoUserPoolsAuthorizer extends Construct {

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
          return resultsCacheTtl.toSeconds();
        }
        return undefined;
      }()),
    };
  }
}


