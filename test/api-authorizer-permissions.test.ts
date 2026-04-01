import * as cdk from "aws-cdk-lib";
import { Duration } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as openapix from "../src";

function createSchema(securitySchemes: Record<string, any>) {
  return new openapix.Schema({
    openapi: "3.0.1",
    info: {
      title: "TestApi",
      version: "0.0.0",
    },
    paths: {
      "/foo": {
        get: {
          operationId: "get-foo",
          responses: {},
        },
      },
    },
    components: {
      securitySchemes,
    },
  });
}

describe("Api authorizer permissions", () => {
  test("grants a single invoke permission for duplicate Lambda authorizers using the same function", () => {
    const stack = new cdk.Stack();
    const authorizerFunction = new lambda.Function(
      stack,
      "AuthorizerFunction",
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: "index.handler",
        code: lambda.Code.fromInline(
          "exports.handler = async () => ({ principalId: 'user' });",
        ),
      },
    );

    new openapix.Api(stack, "Api", {
      upload: false,
      source: createSchema({
        FirstAuthorizer: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
        SecondAuthorizer: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      }),
      authorizers: [
        new openapix.LambdaAuthorizer(stack, "FirstAuthorizer", {
          fn: authorizerFunction,
          identitySource: apigateway.IdentitySource.header("Authorization"),
          type: "request",
          authType: "custom",
        }),
        new openapix.LambdaAuthorizer(stack, "SecondAuthorizer", {
          fn: authorizerFunction,
          identitySource: apigateway.IdentitySource.header("Authorization"),
          type: "request",
          authType: "custom",
        }),
      ],
      paths: {
        "/foo": {
          get: new openapix.MockIntegration(),
        },
      },
    });

    Template.fromStack(stack).resourceCountIs("AWS::Lambda::Permission", 1);
  });

  test("does not create Lambda permissions for Cognito authorizers", () => {
    const stack = new cdk.Stack();
    const userPool = new cognito.UserPool(stack, "UserPool");

    new openapix.Api(stack, "Api", {
      upload: false,
      source: createSchema({
        CognitoAuthorizer: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      }),
      authorizers: [
        new openapix.CognitoUserPoolsAuthorizer(stack, "CognitoAuthorizer", {
          cognitoUserPools: [userPool],
          resultsCacheTtl: Duration.minutes(5),
        }),
      ],
      paths: {
        "/foo": {
          get: new openapix.MockIntegration(),
        },
      },
    });

    Template.fromStack(stack).resourceCountIs("AWS::Lambda::Permission", 0);
  });
});
