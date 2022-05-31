import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as openapix from '@alma-cdk/openapix';
import * as path from 'path';

export class HelloApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const greetFn = new NodejsFunction(this, 'greet');

    new openapix.Api(this, 'HelloApi', {
      source: path.join(__dirname, '../schema/hello-api.yaml'),
      paths: {
        '/': {
          get: new openapix.LambdaIntegration(this, greetFn),
        },
      },
    })
  }
}
