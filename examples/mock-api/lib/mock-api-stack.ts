import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as openapix from '@alma-cdk/openapix';
import * as path from 'path';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { readFileSync } from 'fs';

export class MockApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new openapix.Api(this, 'MockApi', {
      source: path.join(__dirname, '../schema/mock-api.yaml'),
      paths: {
        '/': {
          get: new openapix.MockIntegration(this, {
            requestTemplates: {
              "application/json": JSON.stringify({ statusCode: 200 }),
            },
            passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
            requestParameters: {
              'integration.request.querystring.name': 'method.request.querystring.name',
            },
            integrationResponses: [
              {
                statusCode: '200',
                responseTemplates: {
                  // see /examples/mock-api/lib/greet.vtl
                  'application/json': readFileSync(__dirname+'/greet.vtl', 'utf-8'),
                },
                responseParameters: {},
              },
            ],
          }),
        },
      },
    });
  }
}
