import { EndpointType, SpecRestApi } from 'aws-cdk-lib/aws-apigateway';
import { PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { AuthorizerConfig, LambdaAuthorizer } from '../authorizers';
import { Integration, InternalIntegrationType } from '../integration/base';
import { LambdaIntegration } from '../integration/lambda';
import { IDocument } from '../schema';
import { ApiDefinition } from './definition';
import { ApiProps, Paths } from './props';

/**
 * AWS API Gateway REST API defined with OpenApi v3 schema.
 */
export class Api extends SpecRestApi {

  /**
   * The final OpenApi v3 document used to generate the AWS API Gateway.
   */
  public readonly document: IDocument;

  /**
   * Function invoke role
   */
  public readonly invokeRole: Role;

  /** Function invoke policy statement */
  private invokeRolePolicyStatement: PolicyStatement | undefined;

  /**
   * Define a new API Gateway REST API using OpenApi v3 Schema definition.
   *
   * @example
   * const fn: IFunction;
   *
   * new openapix.Api(this, 'MyApi', {
   *   source: './schema.yaml',
   *   paths: {
   *     '/foo': {
   *       get: new openapix.MockIntegration(this),
   *     },
   *     '/bar': {
   *       post: new openapix.LambdaIntegration(this, fn),
   *     },
   *   }
   * })
   *
   */
  constructor(scope: Construct, id: string, props: ApiProps) {

    const apiDefinition = new ApiDefinition(scope, {
      source: props.source,
      upload: props.upload === true,
      paths: props.paths || {},
      authorizers: props.authorizers || [],
      validators: props.validators || {},
      defaultCors: props.defaultCors,
      injections: props.injections || {},
      rejections: props.rejections || [],
      rejectionsDeep: props.rejectionsDeep || [],
      invokeRole: props.invokeRole,
    });

    super(scope, id, {
      apiDefinition: apiDefinition,
      endpointTypes: [EndpointType.REGIONAL],
      ...props.restApiProps,
    });

    this.invokeRole = apiDefinition.invokeRole;

    // Allow the API Gateway to invoke given Lambda function integrations
    this.grantLambdaInvokes(props.paths);

    // Allow the API Gateway to invoke given Lambda authorizer integrations
    this.grantLambdaAuthorizerInvokes(props.authorizers);

    // Expose the processed OpenApi v3 document.
    // Mainly used for testing.
    this.document = apiDefinition.document;
  }


  /** Allow Lambda invocations to API Gateway instance principal */
  private grantLambdaInvokes(paths: Paths = {}): void {
    // loop through paths
    Object.keys(paths).forEach(path => {
      const methodIntegrations = paths[path];

      // loop through methods
      Object.keys(methodIntegrations).forEach(method => {
        const methodIntegration = methodIntegrations[method];
        if (this.isLambdaIntegration(methodIntegration)) {
          methodIntegration.grantFunctionInvoke(this.getInvokeRolePolicyStatement());
        }
      });
    });
  }

  /** Allow Lambda authorizer invocations to API Gateway instance principal */
  private grantLambdaAuthorizerInvokes(authorizers?: AuthorizerConfig[]): void {
    if (!authorizers) {
      return;
    }

    authorizers.forEach(authorizer => {
      if (authorizer instanceof LambdaAuthorizer) {
        authorizer.grantFunctionInvoke(this.getInvokeRolePolicyStatement());
      }
    },
    );
  }

  /** Determine if the integration internal type is `LAMBDA`. */
  private isLambdaIntegration(integration: Integration): integration is LambdaIntegration {
    return integration.type === InternalIntegrationType.LAMBDA;
  }

  /** Get policy statement for lambda invoke role */
  private getInvokeRolePolicyStatement(): PolicyStatement {
    // if invoke role policy statement is not defined, create one
    if (!this.invokeRolePolicyStatement) {
      this.invokeRolePolicyStatement = new PolicyStatement({
        actions: ['lambda:InvokeFunction'],
      });
      this.invokeRolePolicyStatement.addCondition('ArnLike', {
        'aws:SourceArn': this.arnForExecuteApi(),
      });
      this.invokeRole.addToPolicy(this.invokeRolePolicyStatement);
    }

    return this.invokeRolePolicyStatement;
  }
}
