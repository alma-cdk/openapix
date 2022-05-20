/**
 * Describes the `x-amazon-apigateway-authorizer` value.
 *
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-authorizer.html#api-gateway-swagger-extensions-authorizer-example
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-enable-cognito-user-pool.html
 * @see https://awslabs.github.io/smithy/1.0/spec/aws/amazon-apigateway.html
 */
export interface XAmazonApigatewayAuthorizer {

  /**
    * The type of the authorizer. This is a required property.
    *
    * For REST APIs, specify `token` for an authorizer with the caller identity embedded in an authorization token.
    * Specify `request` for an authorizer with the caller identity contained in request parameters.
    *
    * @example
    * 'token'
    * 'request'
    * 'cognito_user_pools'
    */
  readonly type: 'token'|'request'|'cognito_user_pools';

  /**
   * The Uniform Resource Identifier (URI) of the authorizer Lambda function.
   *
   * @example
   * 'arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:account-id:function:auth_function_name/invocations'
   */
  readonly authorizerUri?: string;

  /**
   * The credentials required for invoking the authorizer, if any, in the form of an ARN of an IAM execution role.
   * @example
   * 'arn:aws:iam::123456789012:role/MyRole'
   */
  readonly authorizerCredentials?: string;


  /**
   * The number of seconds during which authorizer result is cached.
   *
   * @example
   * 60
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * A comma-separated list of mapping expressions of the request parameters as the identity source.
   * Applicable for the authorizer of the `request` and `jwt` type only.
   *
   * @example
   * 'method.request.header.Authorization'
   * 'method.request.header.Authorization, context.identity.sourceIp'
   * 'method.request.header.Auth, method.request.querystring.Name'
   */
  readonly identitySource?: string;

  /**
   * A regular expression for validating the token as the incoming identity.
   *
   * @example
   * '^x-[a-z]+'
   */
  readonly identityValidationExpression?: string;

  /**
   * List of Cognito User Pool ARNs.
   * Applicable for the authorizer of the `cognito_user_pools` type only.
   *
   * @example
   * ['arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}]
   */
  readonly providerARNs?: string[];

}
