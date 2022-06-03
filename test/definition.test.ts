
import * as cdk from 'aws-cdk-lib';
import { Annotations } from 'aws-cdk-lib/assertions';
import * as openapix from '../src';
import { ApiDefinition } from '../src/api/definition';


test('Definition', () => {
  const stack = new cdk.Stack();

  const value = {
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
  };

  const definition = new ApiDefinition(stack, {
    source: new openapix.Schema(value),
  });

  const config = definition.bind(stack);

  expect(config.s3Location).toBeUndefined();
  expect(config.inlineDefinition).toBeDefined();

  expect(config.inlineDefinition).toStrictEqual(value);

});

test('Should add errors when wrong path config', () => {
  const stack = new cdk.Stack();

  const value = {
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
        put: {
          operationId: 'put-foo',
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

  const definition = new ApiDefinition(stack, {
    source: new openapix.Schema(value),
    paths: {
      '/notexistingpath': {
        get: new openapix.MockIntegration(),
      },
    },
  });

  const config = definition.bind(stack);

  expect(config.inlineDefinition).toStrictEqual(value);
  Annotations.fromStack(stack).hasError(
    '*',
    'Path /notexistingpath not found in OpenAPI Definition. Check paths-props in definition.',
  );

  Annotations.fromStack(stack).hasError(
    '*',
    'Missing integration for path: /foo. Check paths-props in definition.',
  );
});


test('Should add mock integrations', () => {
  const stack = new cdk.Stack();

  const value = {
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
        put: {
          operationId: 'put-foo',
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

  const definition = new ApiDefinition(stack, {
    source: new openapix.Schema(value),
    generateMockIntegrations: true,
  });

  const config = definition.bind(stack);

  const basePath = 'paths./foo';

  expect(config.inlineDefinition).toBeDefined();
  expect(config.inlineDefinition).toHaveProperty(
    `${basePath}.get.x-amazon-apigateway-integration.type`,
    'MOCK',
  );
  expect(config.inlineDefinition).toHaveProperty(
    `${basePath}.put.x-amazon-apigateway-integration.type`,
    'MOCK',
  );
});
