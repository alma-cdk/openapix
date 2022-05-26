import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as openapix from '@alma-cdk/openapix';
import * as path from 'path';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { readFileSync } from 'fs';

export class BooksApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'table', {
      partitionKey: {
        type: dynamodb.AttributeType.STRING,
        name: 'item',
      }
    });

    const role = new iam.Role(this, "role", {
      assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
    });

    table.grantReadData(role);

    new openapix.Api(this, 'BooksApi', {
      source: path.join(__dirname, '../schema/books-api.yaml'),
      paths: {
        '/': {
          get: new openapix.AwsIntegration(this, {
            service: 'dynamodb',
            action: 'Scan',
            options: {
              credentialsRole: role,
              requestTemplates: {
                'application/json': JSON.stringify({
                  TableName: table.tableName,
                }),
              },
              integrationResponses: [
                {
                  statusCode: '200',
                  responseTemplates: {
                    // See /examples/http-proxy/lib/list-books.vtl
                    'application/json': readFileSync(__dirname+'/list-books.vtl', 'utf-8'),
                  },
                }
              ],
            },
          }),
        },
        '/{isbn}': {
          get: new openapix.AwsIntegration(this, {
            service: 'dynamodb',
            action: 'GetItem',
            options: {
              credentialsRole: role,
              requestTemplates: {
                'application/json': JSON.stringify({
                  TableName: table.tableName,
                  Key: {
                    item: {
                      "S": "$input.params('isbn')"
                    }
                  }
                }),
              },
              integrationResponses: [
                {
                  statusCode: '200',
                  responseTemplates: {
                    // See /examples/http-proxy/lib/get-book.vtl
                    'application/json': readFileSync(__dirname+'/get-book.vtl', 'utf-8'),
                  },
                }
              ],
            },
          }),
        },
      },
    });
  }
}
