import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as openapix from '@alma-cdk/openapix';
import * as path from 'path';

export class HttpProxyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new openapix.Api(this, 'HttpProxy', {
      source: path.join(__dirname, '../schema/http-proxy.yaml'),

      paths: {
        '/': {
          get:  new openapix.HttpIntegration(
            this,
            'http://example.com',
            {
              httpMethod: 'get',
            }
          ),
        },
      },
    })
  }
}
