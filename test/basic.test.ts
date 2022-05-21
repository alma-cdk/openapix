import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { get } from 'lodash';
import * as openapix from '../src';

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

  const { schema } = new openapix.OpenApi(stack, 'Testing', {
    upload: false,
    source: new openapix.Schema(value),
    paths: {
      [path]: {
        get: new openapix.LambdaIntegration(stack, fn),
      },
    },
  });


  expect(schema).toMatchObject({
    ...value,
    paths: {
      [path]: {
        get: {
          ...value.paths[path].get,
          'x-amazon-apigateway-integration': {
            type: 'AWS_PROXY',
            httpMethod: 'POST',
          },
        },
      },
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::ApiGateway::RestApi', Match.objectLike({
    EndpointConfiguration: {
      Types: [
        'REGIONAL',
      ],
    },
    Name: 'SpecRestApi',
    Body: {
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      paths: {
        [path]: {
          get: {
            'x-amazon-apigateway-integration': {
              type: 'AWS_PROXY',
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
            },
          },
        },
      },
    },
  }));


});


test('Basic usage', () => {
  const stack = new cdk.Stack();
  const { schema } = new openapix.OpenApi(stack, 'MyApi', {
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

  //console.log(openapiSchema);

  expect(schema).toEqual({
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
  const { schema } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      paths: {
        '/foo': {
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

  //console.log(openapiSchema);

  expect(get(schema, 'baz')).toBe(1);
});

test('Reject deep paths', () => {
  const stack = new cdk.Stack();
  const { schema } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
      paths: {
        '/foo': {
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
    rejectionsDeep: ['example'],
  });

  //console.log(openapiSchema);

  expect(get(schema, 'paths./foo.get.responses."200".content."application/json".example')).toBeUndefined();
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

  const { schema } = new openapix.OpenApi(stack, 'MyApi', {
    upload: false,
    source: new openapix.Schema({
      openapi: '3.0.1',
      info: {
        title: 'TestApi',
        version: '0.0.0',
      },
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
        get: new openapix.LambdaIntegration(stack, testLambda),
      },
    },
  });

  //console.log(openapiSchema);

  expect(get(schema, 'components.securitySchemes.MyLambdaAuthorizer')).toBeDefined();
  expect(get(schema, 'paths./foo.get.security[0].MyLambdaAuthorizer')).toEqual([]);
});
