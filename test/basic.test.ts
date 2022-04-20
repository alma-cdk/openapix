import * as cdk from 'aws-cdk-lib';
import { OpenApiXDefinition, OpenApiXSource } from '../src';

test('Basic usage', () => {
  const stack = new cdk.Stack();
  const apiDefinition = new OpenApiXDefinition(stack, {
    upload: false,
    source: new OpenApiXSource({
      openapi: '3.0.1',
    }),
  });

  const def = 'definition';

  expect(apiDefinition[def]).toEqual({ openapi: '3.0.1' } );
});

test('Inject paths', () => {
  const stack = new cdk.Stack();
  const apiDefinition = new OpenApiXDefinition(stack, {
    upload: false,
    source: new OpenApiXSource({
      openapi: '3.0.1',
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
    injectPaths: {
      baz: 1,
    },
  });

  const def = 'definition';

  expect(apiDefinition[def].baz).toBe(1);
});

test('Reject deep paths', () => {
  const stack = new cdk.Stack();
  const apiDefinition = new OpenApiXDefinition(stack, {
    upload: false,
    source: new OpenApiXSource({
      openapi: '3.0.1',
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
    rejectDeepPaths: ['example'],
  });

  const def = 'definition';

  expect(apiDefinition[def].paths['/foo'].get.responses['200'].content['application/json'].example).toBeUndefined();
});
