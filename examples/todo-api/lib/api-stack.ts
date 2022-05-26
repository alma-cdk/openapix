import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as openapix from '@alma-cdk/openapix';
import * as path from 'path';

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

    new openapix.Api(this, 'TodoApi', {
      source: path.join(__dirname, '..', '/schema/todo-api.yaml'),

      validators: {
        'all': {
          validateRequestBody: true,
          validateRequestParameters: true,
          default: true, // set this as the "API level" default validator (there can be only one)
        },
        'params-only' : {
          validateRequestBody: false,
          validateRequestParameters: true,
        },
      },

      paths: {
        '/todos': {
          // this one uses the default 'all' validator
          post:  new openapix.HttpIntegration(
            this,
            baseUrl,
            {
              httpMethod: 'post',
            }
          ),
        },
        '/todos/{todoId}': {
          // this one has validator override and uses 'params-only' validator
          get: new openapix.HttpIntegration(
            this,
            `${baseUrl}/{todoId}`,
            {
              validator: 'params-only',
              options: {
                requestParameters: {
                  'integration.request.path.todoId': 'method.request.path.todoId',
                },
              },
            },
          ),
        },
      },
    })
  }
}
