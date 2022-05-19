import { AuthorizationType } from "aws-cdk-lib/aws-apigateway";



/**
 * Describes the `x-amazon-apigateway-auth` interface used within `paths`.
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-auth.html
 */
 export interface XAmazonApigatewayAuth {

  /**
   * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.AuthorizationType.html
   *
   * @example
   * 'NONE'
   * 'AWS_IAM'
   * 'CUSTOM'
   * 'COGNITO_USER_POOLS'
   */
  type: AuthorizationType;
 }
