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
