import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as cdk from "aws-cdk-lib";
import { Annotations } from "aws-cdk-lib/assertions";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as openapix from "../src";
import { expectNoErrorAnnotations } from "./utils";
import { ApiDefinition } from "../src/api/definition";

function createSchemaDocument(paths: Record<string, any> = {}) {
  return {
    openapi: "3.0.1",
    info: {
      title: "TestApi",
      version: "0.0.0",
    },
    paths,
  };
}

describe("ApiDefinition edge cases", () => {
  test("adds an error when an authorizer security scheme is missing", () => {
    const stack = new cdk.Stack();
    const fn = new lambda.Function(stack, "AuthorizerFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        "exports.handler = async () => ({ principalId: 'user' });",
      ),
    });

    new ApiDefinition(stack, {
      source: new openapix.Schema(
        createSchemaDocument({
          "/foo": {
            get: {
              operationId: "get-foo",
              responses: {},
            },
          },
        }),
      ),
      authorizers: [
        new openapix.LambdaAuthorizer(stack, "MissingAuthorizer", {
          fn,
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

    Annotations.fromStack(stack).hasError(
      "*",
      "Security Scheme MissingAuthorizer not found in OpenAPI Definition",
    );
  });

  test("propagates API-level authorizer security without duplicating method security", () => {
    const stack = new cdk.Stack();
    const fn = new lambda.Function(stack, "AuthorizerFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        "exports.handler = async () => ({ principalId: 'user' });",
      ),
    });

    const definition = new ApiDefinition(stack, {
      source: new openapix.Schema({
        ...createSchemaDocument({
          "/foo": {
            get: {
              operationId: "get-foo",
              responses: {},
            },
          },
          "/bar": {
            get: {
              operationId: "get-bar",
              security: [
                {
                  MyAuthorizer: [],
                },
                {
                  otherAuthorizer: [],
                },
              ],
              responses: {},
            },
          },
        }),
        security: [
          {
            MyAuthorizer: [],
          },
        ],
        components: {
          securitySchemes: {
            MyAuthorizer: {
              type: "apiKey",
              in: "header",
              name: "Authorization",
            },
            otherAuthorizer: {
              type: "apiKey",
              in: "query",
              name: "code",
            },
          },
        },
      }),
      authorizers: [
        new openapix.LambdaAuthorizer(stack, "MyAuthorizer", {
          fn,
          identitySource: apigateway.IdentitySource.header("Authorization"),
          type: "request",
          authType: "custom",
        }),
      ],
      paths: {
        "/foo": {
          get: new openapix.MockIntegration(),
        },
        "/bar": {
          get: new openapix.MockIntegration(),
        },
      },
    });

    expectNoErrorAnnotations(stack);
    expect(
      ((definition.document.paths?.["/foo"]?.get as any) || {}).security,
    ).toEqual([
      {
        MyAuthorizer: [],
      },
    ]);
    expect(
      ((definition.document.paths?.["/bar"]?.get as any) || {}).security,
    ).toEqual([
      {
        MyAuthorizer: [],
      },
      {
        otherAuthorizer: [],
      },
    ]);
  });

  test("adds an error when the schema has no paths object", () => {
    const stack = new cdk.Stack();

    new ApiDefinition(stack, {
      source: new openapix.Schema({
        openapi: "3.0.1",
        info: {
          title: "TestApi",
          version: "0.0.0",
        },
      } as any),
    });

    Annotations.fromStack(stack).hasError(
      "*",
      "OpenAPI Definition does not have paths object",
    );
  });

  test("adds an error for unhandled schema methods without a default integration", () => {
    const stack = new cdk.Stack();

    new ApiDefinition(stack, {
      source: new openapix.Schema(
        createSchemaDocument({
          "/foo": {
            get: {
              operationId: "get-foo",
              responses: {},
            },
            post: {
              operationId: "post-foo",
              responses: {},
            },
          },
        }),
      ),
      paths: {
        "/foo": {
          get: new openapix.MockIntegration(),
        },
      },
    });

    Annotations.fromStack(stack).hasError(
      "*",
      "OpenAPI schema has an unhandled path method: /foo/post",
    );
  });

  test("adds an error when configured methods do not exist in the schema", () => {
    const stack = new cdk.Stack();

    new ApiDefinition(stack, {
      source: new openapix.Schema(
        createSchemaDocument({
          "/foo": {
            get: {
              operationId: "get-foo",
              responses: {},
            },
          },
        }),
      ),
      paths: {
        "/foo": {
          get: new openapix.MockIntegration(),
          post: new openapix.MockIntegration(),
        },
      },
    });

    Annotations.fromStack(stack).hasError(
      "*",
      "OpenAPI schema is missing method post for path: /foo",
    );
  });

  test("adds an error when an integration already exists in the schema", () => {
    const stack = new cdk.Stack();

    new ApiDefinition(stack, {
      source: new openapix.Schema(
        createSchemaDocument({
          "/foo": {
            get: {
              operationId: "get-foo",
              responses: {},
              "x-amazon-apigateway-integration": {
                type: "MOCK",
              },
            },
          },
        }),
      ),
      paths: {
        "/foo": {
          get: new openapix.MockIntegration(),
        },
      },
    });

    Annotations.fromStack(stack).hasError(
      "*",
      "OpenAPI schema already has x-amazon-apigateway-integration configuration for method get in path: /foo",
    );
  });

  test("bind uploads the definition when upload is enabled and source is a file path", () => {
    const stack = new cdk.Stack();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "openapix-definition-"));
    const schemaPath = path.join(dir, "schema.yaml");

    fs.writeFileSync(
      schemaPath,
      [
        'openapi: "3.0.1"',
        "info:",
        "  title: TestApi",
        '  version: "0.0.0"',
        "paths: {}",
        "",
      ].join("\n"),
      "utf-8",
    );

    const definition = new ApiDefinition(stack, {
      source: schemaPath,
      upload: true,
    });

    const config = definition.bind(stack);

    expectNoErrorAnnotations(stack);
    expect(config.inlineDefinition).toBeUndefined();
    expect(config.s3Location).toBeDefined();
    expect(config.s3Location?.bucket).toBeDefined();
    expect(config.s3Location?.key).toBeDefined();
  });
});
