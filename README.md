<div align="center">
	<br/>
	<br/>
  <h1>
	<img height="140" src="assets/alma-cdk-openapix.svg" alt="Alma CDK OpenApiX" />
  <br/>
  <br/>
  </h1>

  ```sh
  npm i -D @alma-cdk/openapix
  ```

  <div align="left">

  Generate AWS Api Gateway REST APIs via [OpenAPI](https://www.openapis.org/) (a.k.a. Swagger) Schema Definitions by consuming "clean" OpenAPI schemas and inject `x-amazon-apigateway-` extensions _with type-safety_.

  </div>
  <br/>
</div>


<br/>

<div align="center">

![diagram](assets/diagram.svg)

</div>

<br/>

## Work in Progress

![experimental](https://img.shields.io/badge/stability-experimental-yellow "Stability: Experimental")

🚧 &nbsp;**Do not use for production critial stuff! This construct is still very much work in progress and breaking changes may occur.** 🚧


<br/>

## Getting Started

1. First, let's create some integration points:
    ```ts
    const fn = new lambda.Function(this, "fn", {
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromInline('export function handler() { return { statusCode: 200, body: JSON.stringify("hello")} }'),
    });

    const pkName = 'item';
    const table = new dynamodb.Table(this, 'table', {
      partitionKey: {
        type: dynamodb.AttributeType.STRING,
        name: pkName,
      }
    });

    const role = new iam.Role(this, "role", {
      assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
    });

    table.grantReadData(role);
    ```


2. Next, let's inject the integrations into an existing OpenAPI schema:
    ```ts
    import * as openapix from '@alma-cdk/openapix';

    const apiDefinition = new openapix.OpenApiDefinition(this, {
      upload: false, // by default add as inline Body, set to true to use as BodyS3Location
      source: './schema.yaml',
      integrations: {

        // Mock Integration
        '/mock': {
          'GET': new openapix.MockIntegration(this),
        },

        // AWS Lambda integration
        '/message': {
          'POST': new openapix.LambdaIntegration(this, fn),
        },

        // HTTP Proxy integration
        '/ext': {
          'ANY': new openapix.HttpIntegration(this, "https://example.com"),
        },

        // Direct integration to AWS Service
        '/item': {
          'GET': new openapix.AwsIntegration(this, {
            service: 'dynamodb',
            action: 'GetItem',
            options: {
              credentialsRole: role,
              requestTemplates: {
                'application/json': JSON.stringify({
                  "TableName": table.tableName,
                  "Key": {
                    [pkName]: {
                      "S": "$input.params('item')"
                    }
                  }
                }),
              },
            },
          }),
        },

      },
    })
    ```

3. Finally, let's assign the definition into `SpecRestApi`:
    ```ts
    import { SpecRestApi } from 'aws-cdk-lib/aws-apigateway';

    new SpecRestApi(this, 'api', {
      apiDefinition,
      // optionally configure the API as you wish...
    });
    ```

<br/>

## Validators

API Gateway REST APIs can perform [request parameter and request body validation](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html). You can provide both default validator and integration specific validator (which will override the default for given integration).

```ts
const apiDefinition = new openapix.OpenApiDefinition(this, {
  source: './schema.yaml',

  validators: {
    'all': {
      validateRequestBody: true,
      validateRequestParameters: true,
      default: true, // set this as the "API level" default validator (there can be only one)
    },
    'params-only' : {
      validateRequestBody: false,
      validateRequestParameters: true,
    },
  },

  integrations: {
    '/message': {
      // Set a method-specific validator by assigning validator into props
      'POST': new openapix.LambdaIntegration(this, fn, { validator: 'params-only' }),
    },
  },
})
```

<br/>

## Authorizers

There are multiple ways to [control & manages access to API Gateway REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html) such as [resource policies](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html), [IAM permissions](https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html) and [usage plans with API keys](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) but this section focuses on [Cognito User Pools ](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html) and [Lambda authorizers](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html).

<br/>

### Cognito Authorizers

In this example we're defining a Congito User Pool based authorizer.

Given the following `schema.yaml` OpenApi definition:
```yaml
openapi: 3.0.0
paths:
  /:
    get:
      security:
        - MyAuthorizer: ["test/read"] # add scope
components:
  securitySchemes:
    MyCognitoAuthorizer:
      type: apiKey
      name: Authorization
      in: header
```

You can define the Cognito Authorizer in CDK with:
```ts
const userPool: cognito.IUserPool;

const apiDefinition = new openapix.OpenApiDefinition(this, {
  source: './schema.yaml',

  authorizers: {
    MyCognitoAuthorizer: {
      cognitoUserPools: [userPool],
      resultsCacheTtl: Duration.minutes(5),
    },
  },
})
```

<br/>

### Lambda Authorizers

In this example we're defining a custom Lambda authorizer. The authorizer function code is not relevant for the example but the idea in the example is that an API caller sends some "secret code" in query parameters (`?code=example123456`) which then the authorizer function somehow evaluates.

Given the following `schema.yaml` OpenApi definition:
```yaml
openapi: 3.0.0
paths:
  /:
    get:
      security:
        - MyAuthorizer: [] # note the empty array
components:
  securitySchemes:
    MyCustomAuthorizer:
      type: apiKey
      name: code
      in: query
```

You can define the custom Lambda Authorizer in CDK with:
```ts
const authFn: lambda.IFunction;

const apiDefinition = new openapix.OpenApiDefinition(this, {
  source: './schema.yaml',

  authorizers: {
    MyCustomAuthorizer: {
      fn: authFn,
      identitySource: apigateway.IdentitySource.queryString('code'),
      type: 'request',
      authType: 'custom',
      resultsCacheTtl: Duration.minutes(5),
    },
  },
})
```


<br/>

## Inject/Reject

You may modify the generated OpenAPI definition (which is used to define API Gateway REST API) by injecting or rejecting values from the source OpenAPI schema definition:
```ts
const apiDefinition = new openapix.OpenApiDefinition(this, {
  source: './schema.yaml',

  // Add any OpenAPI v3 data.
  // Can be useful for passing values from CDK code.
  // See https://swagger.io/specification/
  injections: {
    "info.title": "FancyPantsAPI"
  },

  // Reject fields by absolute object path from generated definition
  rejections: ['info.description'],

  // Reject all matching fields from generated definition
  rejectionsDeep: ['example', 'examples'],
});
```

<br/>

## CORS

Using `openapix.CorsIntegration` creates a Mock integration which responds with correct response headers:

```ts
const apiDefinition = new openapix.OpenApiDefinition(this, {
  source: './schema.yaml',

  integrations: {
    '/foo': {
      'OPTIONS': new openapix.CorsIntegration(this, {
        // using helper method to define explicit values:
        headers: CorsHeaders.from(this, 'Content-Type', 'X-Amz-Date', 'Authorization'),
        origins: CorsOrigins.from(this, 'https://www.example.com'),
        methods: CorsMethods.from(this, 'OPTIONS','POST','GET'),
      }),
    },
    '/bar': {
      'OPTIONS': new openapix.CorsIntegration(this, {
        // using regular string values:
        headers: 'Content-Type,X-Amz-Date,Authorization',
        origins: '*',
        methods: 'OPTIONS,GET',
      }),
    },
    '/baz': {
      'OPTIONS': new openapix.CorsIntegration(this, {
        // using helper constant for wildcard values:
        headers: CorsHeaders.ANY,
        origins: CorsOrigins.ANY,
        methods: CorsMethods.ANY,
      }),
    },
  },
});
```

When specifying multiple `origins` the mock integration uses [VTL magic](https://medium.com/@srikanth650/use-api-gateway-with-mock-integration-to-allow-cors-from-multiple-origins-bdcb431d07d3) to respond with the correct `Access-Control-Allow-Origin` header.

### Default CORS

If you wish to define same CORS options to every path, you may do so by providing a default `cors` value:
```ts
const apiDefinition = new openapix.OpenApiDefinition(this, {
  source: './schema.yaml',

  cors: new openapix.CorsIntegration(this, {
    headers: CorsHeaders.ANY,
    origins: CorsOrigins.ANY,
    methods: CorsMethods.ANY,
  }),

  integrations: {/*...*/},
});
```

This will apply the given `cors` configuration to _every_ path as `OPTIONS` method. You may still do path specific overrides by adding an `OPTIONS` method to specific paths.
