import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { IdentitySource } from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { get, set } from 'lodash';
import * as openapix from '../src';
import { LambdaAuthorizer, MockIntegration } from '../src';
import { expectNoErrorAnnotations } from './utils';

test('Validators', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  const fn = new lambda.Function(stack, 'TestFunction', {
    runtime: lambda.Runtime.NODEJS_12_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`module.exports = {
      handler: async (event) => {
        console.log(event);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Hello',
          }),
        };
      },
    }`),
  });

  const path = '/message';

  const value = {
    openapi: '3.0.1',
    info: {
      title: 'TestApi',
      version: '0.0.0',
    },
    paths: {
      [path]: {
        get: {
          operationId: 'get-message',
          responses: {
            200: {
              content: {
                'application/json': {
                  example: [
                    {
                      some: 'foo',
                      thing: 'bar',
                    },
                  ],
                },
              },
              description: 'foo',
            },
          },
        },
      },
    },
  };

  const { document } = new openapix.Api(stack, 'Testing', {
    upload: false,
    source: new openapix.Schema(value),
    validators: {
      'all': {
        validateRequestBody: true,
        validateRequestParameters: true,
        default: true, // set this as the "API level" default validator (there can be only one)
      },
      'params-only': {
        validateRequestBody: false,
        validateRequestParameters: true,
      },
    },
    paths: {
      [path]: {
        get: new openapix.LambdaIntegration(stack, fn, {
          validator: 'params-only',
        }),
      },
    },
  });

  const expectationBase = Object.assign({}, value);

  expectNoErrorAnnotations(stack);
  expect(document).toMatchObject(
    set(
      set(
        expectationBase,
        `paths.${path}.get.x-amazon-apigateway-request-validator`,
        'params-only',
      ),
      'x-amazon-apigateway-request-validators',
      {
        'all': {
          validateRequestBody: true,
          validateRequestParameters: true,
        },
        'params-only': {
          validateRequestBody: false,
          validateRequestParameters: true,
        },
      },
    ),
  );


});

test('Synth', () => {

  const app = new cdk.App();

  const stack = new cdk.Stack(app, 'TestStack');

  const fn = new lambda.Function(stack, 'TestFunction', {
    runtime: lambda.Runtime.NODEJS_12_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`module.exports = {
      handler: async (event) => {
        console.log(event);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Hello',
          }),
        };
      },
    }`),
  });

  const path = '/message';
  const authorizerName = 'TestAuthorizer';

  const value = {
    openapi: '3.0.1',
    info: {
      title: 'TestApi',
      version: '0.0.0',
    },
    security: [
      {
        [authorizerName]: [],
      },
    ],
    components: {
      securitySchemes: {
        [authorizerName]: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
        },
      },
    },
    paths: {
      [path]: {
        'summary': 'Some desc',
        'description': 'Some longer desc',
        'servers': [
          {
            url: 'https://example.com/api/v1',
          },
        ],
        'x-param': {
          foo: {
            bar: 1,
          },
        },
        'get': {
          operationId: 'get-message',
          responses: {
            200: {
              content: {
                'application/json': {
                  example: [
                    {
                      some: 'foo',
                      thing: 'bar',
                    },
                  ],
                },
              },
              description: 'foo',
            },
          },
        },
      },
    },
  };

  const { document } = new openapix.Api(stack, 'Testing', {
    upload: false,
    source: new openapix.Schema(value),
    authorizers: [new LambdaAuthorizer(stack, authorizerName, {
      fn,
      identitySource: IdentitySource.header('Authorization'),
      resultsCacheTtl: cdk.Duration.seconds(300),
      type: 'request',
      authType: 'custom',
    })],
    paths: {
      [path]: {
        get: new openapix.LambdaIntegration(stack, fn),
      },
    },
  });

  const expectationBase = Object.assign({}, value);

  expect(document).toMatchObject(
    set(expectationBase, `paths.${path}.get.x-amazon-apigateway-integration`, {
      type: 'AWS_PROXY',
      httpMethod: 'POST',
      uri: expect.stringMatching(/^arn:.*:apigateway:.*:lambda.path\/2015-03-31\/functions\/.*\/invocations/),
    }),
  );

  const template = Template.fromStack(stack);

  expectNoErrorAnnotations(stack);

  template.hasResourceProperties('AWS::ApiGateway::RestApi', Match.objectLike({
    EndpointConfiguration: {
      Types: [
        'REGIONAL',
      ],
    },
    Name: 'Testing',
    Body: set(expectationBase, `paths.${path}.get.x-amazon-apigateway-integration`, {
      type: 'AWS_PROXY',
      httpMethod: 'POST',
      uri: {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            ':apigateway:',
            {
              Ref: 'AWS::Region',
            },
            ':lambda:path/2015-03-31/functions/',
            {
              'Fn::GetAtt': [
                Match.stringLikeRegexp('TestFunction*'),
                'Arn',
              ],
            },
            '/invocations',
          ],
        ],
      },
    }),
  }));


});


test('Basic usage', () => {
  const stack = new cdk.Stack();
  const { document } = new openapix.Api(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      paths: {},
    }),
  });
  expectNoErrorAnnotations(stack);
  expect(document).toEqual({
    openapi: '3.0.1',
    info: {
      title: 'TestApi',
      version: '0.0.0',
    },
    paths: {},
  });
});

test('Inject paths', () => {
  const stack = new cdk.Stack();
  const { document } = new openapix.Api(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      paths: {
        '/foo': {
          summary: 'Some desc',
          get: {
            operationId: 'get-foo',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        some: 'foo',
                        thing: 'bar',
                      },
                    ],
                  },
                },
                description: 'foo',
              },
            },
          },
        },
      },
    }),
    injections: {
      baz: 1,
    },
  });

  expect(get(document, 'baz')).toBe(1);
});

test('Reject deep paths', () => {
  const stack = new cdk.Stack();

  const { document } = new openapix.Api(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      paths: {
        '/foo': {
          summary: 'Some desc',
          get: {
            summary: 'Some desc',
            operationId: 'get-foo',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        some: 'foo',
                        thing: 'bar',
                      },
                    ],
                  },
                },
                description: 'foo',
              },
            },
          },
        },
      },
    }),
    defaultIntegration: new MockIntegration(),
    rejectionsDeep: ['example'],
  });

  expectNoErrorAnnotations(stack);
  expect(get(document, 'paths./foo.get.responses."200".content."application/json".example')).toBeUndefined();
});

test('Handles custom authorizer', () => {
  const stack = new cdk.Stack();
  const testLambda = new lambda.Function(stack, 'TestFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`module.exports = {
              handler: async (event) => {
                console.log(event);
                return {
                  statusCode: 200,
                  body: JSON.stringify({
                    message: 'Hello',
                  }),
                };
              },
            }`),
  });

  const authorizerName = 'MyLambdaAuthorizer';

  const authorizerLambda = new lambda.Function(stack, 'AuthorizerFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`module.exports = {
              handler: async (event) => {
                console.log(event);
                return {
                  statusCode: 200,
                  body: JSON.stringify({
                    message: 'Hello',
                  }),
                };
              },
            }`),
  });

  const api = new openapix.Api(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      security: [
        {
          otherAuthorizer: [],
        },
      ],
      components: {
        securitySchemes: {
          [authorizerName]: {
            type: 'apiKey',
            name: 'code',
            in: 'query',
          },
          otherAuthorizer: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      paths: {
        '/foo': {
          get: {
            operationId: 'get-foo',
            security: [
              {
                [authorizerName]: [],
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        some: 'foo',
                        thing: 'bar',
                      },
                    ],
                  },
                },
                description: 'foo',
              },
            },
          },
        },
        '/bar': {
          get: {
            operationId: 'get-bar',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        some: 'bar',
                        thing: 'baz',
                      },
                    ],
                  },
                },
                description: 'bar',
              },
            },
          },
        },
      },
    }),

    authorizers: [
      new openapix.LambdaAuthorizer(stack, authorizerName, {
        fn: authorizerLambda,
        identitySource: apigateway.IdentitySource.queryString('code'),
        type: 'request',
        authType: 'custom',
        resultsCacheTtl: Duration.minutes(5),
      }),
      new openapix.LambdaAuthorizer(stack, 'otherAuthorizer', {
        fn: authorizerLambda,
        identitySource: apigateway.IdentitySource.queryString('code'),
        type: 'request',
        authType: 'custom',
        resultsCacheTtl: Duration.minutes(5),
      }),
    ],

    paths: {
      '/foo': {
        get: new openapix.LambdaIntegration(stack, testLambda),
      },
      '/bar': {
        get: new openapix.LambdaIntegration(stack, testLambda),
      },
    },
  });

  const template = Template.fromStack(stack);

  expectNoErrorAnnotations(stack);
  expect(get(api.document, 'components.securitySchemes.MyLambdaAuthorizer')).toBeDefined();
  expect(get(api.document, 'paths./foo.get.security[0].MyLambdaAuthorizer')).toEqual([]);
  expect(get(api.document, 'paths./foo.get.security[1].otherAuthorizer')).toEqual([]);
  template.hasResourceProperties( 'AWS::Lambda::Permission', Match.objectLike({
    Action: 'lambda:InvokeFunction',
    FunctionName: {
      Ref: Match.stringLikeRegexp('AuthorizerFunction*'),
    },
    Principal: 'apigateway.amazonaws.com',
  }));
});

test('Handles cross-stack imports inside cdk-app', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'MainStack');
  const lambdaStack = new cdk.Stack(app, 'OtherStack');
  const testLambda = new lambda.Function(lambdaStack, 'TestFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`module.exports = {
                handler: async (event) => {
                  console.log(event);
                  return {
                    statusCode: 200,
                    body: JSON.stringify({
                      message: 'Hello',
                    }),
                  };
                },
              }`),
  });

  const authorizerName = 'MyLambdaAuthorizer';

  const authorizerLambda = new lambda.Function(stack, 'AuthorizerFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`module.exports = {
                handler: async (event) => {
                  console.log(event);
                  return {
                    statusCode: 200,
                    body: JSON.stringify({
                      message: 'Hello',
                    }),
                  };
                },
              }`),
  });

  new openapix.Api(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      security: [
        {
          otherAuthorizer: [],
        },
      ],
      components: {
        securitySchemes: {
          [authorizerName]: {
            type: 'apiKey',
            name: 'code',
            in: 'query',
          },
        },
      },
      paths: {
        '/foo': {
          get: {
            operationId: 'get-foo',
            security: [
              {
                [authorizerName]: [],
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        some: 'foo',
                        thing: 'bar',
                      },
                    ],
                  },
                },
                description: 'foo',
              },
            },
          },
        },
        '/bar': {
          get: {
            operationId: 'get-bar',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        some: 'bar',
                        thing: 'baz',
                      },
                    ],
                  },
                },
                description: 'bar',
              },
            },
          },
        },
      },
    }),

    authorizers: [
      new openapix.LambdaAuthorizer(stack, authorizerName, {
        fn: authorizerLambda,
        identitySource: apigateway.IdentitySource.queryString('code'),
        type: 'request',
        authType: 'custom',
        resultsCacheTtl: Duration.minutes(5),
      }),
    ],

    paths: {
      '/foo': {
        get: new openapix.LambdaIntegration(stack, testLambda),
      },
      '/bar': {
        get: new openapix.LambdaIntegration(stack, testLambda),
      },
    },
  });

  expectNoErrorAnnotations(stack);
});
