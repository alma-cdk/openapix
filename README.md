# CDK OpenApiX

![experimental](https://img.shields.io/badge/stability-experimental-yellow "Stability: Experimental")

**Work-in-Progress**

Do not use this: Things may break at any given time & this project may be destroyed at any given time.

<br/><br/><br/><br/><br/><br/><br/><br/><br/>

```sh
npm i -D @almamedia-open-source/cdk-openapix
```

```ts
const fn = new lambda.Function(this, "fn", {
  handler: "index.handler",
  runtime: lambda.Runtime.NODEJS_14_X,
  code: lambda.Code.fromInline('export function handler() { return { statusCode: 200, body: JSON.stringify("hello")} }'),
});

const table = new dynamodb.Table(this, 'table', {
  partitionKey: {
    type: dynamodb.AttributeType.STRING,
    name: 'item',
  }
});

const role = new iam.Role(this, "role", {
  assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
});

table.grantReadData(role);

const apiDefinition = new OpenApiXDefinition(this, {
  upload: false, // by default add as inline Body, set to true to use as BodyS3Location
  schemaPath: './schema.yaml',
  integrations: {

    // Mock Integration
    '/mock': { 'GET': new OpenApiXMock(this) },

    // AWS Lambda Proxy integration
    '/message': { 'GET': new OpenApiXLambda(this, fn) },

    // HTTP Proxy integration
    '/ext': { 'GET': new OpenApiXHttp(this, "https://example.com") },

    // Direct integration to AWS Service
    '/item': { 'GET': new OpenApiXService(this, {
          service: 'dynamodb',
          action: 'GetItem',
          options: {
            credentialsRole: role,
            requestTemplates: {
              'application/json': JSON.stringify({
                "TableName": table.tableName,
                "Key": {
                  "email": {
                    "S": "$input.params('item')"
                  }
                }
              }),
            },
          },
      }),
    },

  },

  injectPaths: { "info.title": "FancyPantsAPI" },
  rejectPaths: ['info.version'],

  // TODO add validators...
})


new apigateway.SpecRestApi(this, 'api', {
  apiDefinition,
});

// Also supports new OpenApiX()
```
