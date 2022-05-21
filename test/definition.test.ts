
import * as cdk from 'aws-cdk-lib';
import * as openapix from '../src';
import { OpenApiDefinition } from '../src/api/definition';


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

  const definition = new OpenApiDefinition(stack, {
    source: new openapix.Schema(value),
    upload: false,
    paths: {},
    authorizers: [],
    validators: {},
    defaultCors: undefined,
    injections: {},
    rejections: [],
    rejectionsDeep: [],
  });

  const config = definition.bind(stack);

  expect(config.s3Location).toBeUndefined();
  expect(config.inlineDefinition).toBeDefined();

  expect(config.inlineDefinition).toStrictEqual(value);

});
