
import * as cdk from 'aws-cdk-lib';
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
