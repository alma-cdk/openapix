import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as openapix from "../src";

function createSchema(paths: Record<string, any>) {
  return new openapix.Schema({
    openapi: "3.0.1",
    info: {
      title: "TestApi",
      version: "0.0.0",
    },
    paths,
  });
}

describe("Api permissions", () => {
  test("grants a single invoke permission per Lambda function", () => {
    const stack = new cdk.Stack();
    const fn = new lambda.Function(stack, "SharedFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        "exports.handler = async () => ({ statusCode: 200 });",
      ),
    });

    new openapix.Api(stack, "Api", {
      upload: false,
      source: createSchema({
        "/foo": {
          get: {
            operationId: "get-foo",
            responses: {},
          },
        },
        "/bar": {
          get: {
            operationId: "get-bar",
            responses: {},
          },
        },
      }),
      paths: {
        "/foo": {
          get: new openapix.LambdaIntegration(stack, fn),
        },
        "/bar": {
          get: new openapix.LambdaIntegration(stack, fn),
        },
      },
    });

    Template.fromStack(stack).resourceCountIs("AWS::Lambda::Permission", 1);
  });

  test("skips Lambda invoke permissions for credentialed integrations", () => {
    const stack = new cdk.Stack();
    const fn = new lambda.Function(stack, "CredentialedFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        "exports.handler = async () => ({ statusCode: 200 });",
      ),
    });
    const role = new iam.Role(stack, "ApiGatewayRole", {
      assumedBy: new iam.ServicePrincipal("apigateway.amazonaws.com"),
    });

    new openapix.Api(stack, "Api", {
      upload: false,
      source: createSchema({
        "/foo": {
          get: {
            operationId: "get-foo",
            responses: {},
          },
        },
      }),
      paths: {
        "/foo": {
          get: new openapix.LambdaIntegration(stack, fn, {
            credentialsRole: role,
          }),
        },
      },
    });

    Template.fromStack(stack).resourceCountIs("AWS::Lambda::Permission", 0);
  });
});
