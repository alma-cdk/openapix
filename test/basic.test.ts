import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { get } from 'lodash';
import * as openapix from '../src';

test('Basic usage', () => {
  const stack = new cdk.Stack();
  const { definition } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
    }),
  });

  const actual = get(definition, 'definition');


  expect(actual).toEqual({ openapi: '3.0.1' } );
});

test('Inject paths', () => {
  const stack = new cdk.Stack();
  const { definition } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      paths: {
        '/foo': {
          GET: {
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

  expect(get(definition, 'definition.baz')).toBe(1);
});

test('Reject deep paths', () => {
  const stack = new cdk.Stack();
  const { definition } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      paths: {
        '/foo': {
          GET: {
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
    rejectionsDeep: ['example'],
  });


  expect(get(definition, 'definition.paths./foo.get.responses."200".content."application/json".example')).toBeUndefined();
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

  const { definition } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
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
          GET: {
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
      },
    }),

    authorizers: [

      new openapix.LambdaAuthorizer(stack, authorizerName, {
        fn: testLambda,
        identitySource: apigateway.IdentitySource.queryString('code'),
        type: 'request',
        authType: 'custom',
        resultsCacheTtl: Duration.minutes(5),
      }),
    ],

    paths: {
      '/foo': {
        GET: new openapix.LambdaIntegration(stack, testLambda),
      },
    },
  });

  const actual = get(definition, 'definition');

  console.log('foo.get', actual.paths['/foo'].GET);

  expect(get(actual, 'components.securitySchemes.MyLambdaAuthorizer')).toBeDefined();
  expect(get(actual, 'paths./foo.GET.security[0].MyLambdaAuthorizer')).toEqual([]);
});
