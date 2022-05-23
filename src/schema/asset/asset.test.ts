import { Duration, Stack } from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { SchemaAsset } from '.';
import { AwsIntegration, CognitoUserPoolsAuthorizer, LambdaIntegration, Schema } from '../..';
import { Api } from '../../api';


describe('SchemaAsset', () => {

  test('Token Resolving', () => {

    const stack = new Stack();

    const userPool = new cognito.UserPool(stack, 'MyUserPool');

    const handler = new lambda.Function(stack, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`module.exports = {
          handler: async (event) => {
            console.log(event);
            return {
              statusCode: 200,
              body: JSON.stringify({
                message: 'Hello',
              }),
            };
          },
        }`),
    });

    const pkName = 'item';
    const table = new dynamodb.Table(stack, 'MyTable', {
      partitionKey: {
        type: dynamodb.AttributeType.STRING,
        name: pkName,
      },
    });

    const role = new iam.Role(stack, 'MyRole', {
      assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
    });

    table.grantReadData(role);

    const schema = new Schema({
      openapi: '3.0.1',
      info: {
        title: 'Test Api',
        version: '0.0.0',
      },
      paths: {
        '/item': {
          post: {
            operationId: 'postItem',
            responses: {},
            security: [
              {
                MyCognitoAuthorizer: ['test/write'],
              },
            ],
          },
          get: {
            operationId: 'getItem',
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          MyCognitoAuthorizer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
          },
        },
      },
    });

    const { document } = new Api(stack, 'Api', {
      source: schema,
      authorizers: [
        new CognitoUserPoolsAuthorizer(stack, 'MyCognitoAuthorizer', {
          cognitoUserPools: [userPool],
          resultsCacheTtl: Duration.minutes(5),
        }),
      ],
      paths: {
        '/item': {
          post: new LambdaIntegration(stack, handler),
          get: new AwsIntegration(stack, {
            validator: 'params-only',
            service: 'dynamodb',
            action: 'GetItem',
            options: {
              credentialsRole: role,
              requestTemplates: {
                'application/json': JSON.stringify({
                  TableName: table.tableName,
                  Key: {
                    [pkName]: {
                      S: "$input.params('item')",
                    },
                  },
                }),
              },
            },
          }),
        },
      },
    });

    const asset = new SchemaAsset(stack, 'asset', document);

    expect(asset.cloudFormationDocument).toMatchObject({
      info: { title: 'Test Api', version: '0.0.0' },
      openapi: '3.0.1',
      paths: {
        '/item': {
          post: {
            'operationId': 'postItem',
            'responses': {},
            'security': [{ MyCognitoAuthorizer: ['test/write'] }],
            'x-amazon-apigateway-integration': {
              httpMethod: 'POST',
              responses: {},
              type: 'AWS_PROXY',
              uri: {
                'Fn::Join': [
                  '',
                  [
                    'arn:',
                    { Ref: 'AWS::Partition' },
                    ':apigateway:',
                    { Ref: 'AWS::Region' },
                    ':lambda:path/2015-03-31/functions/',
                    { 'Fn::GetAtt': [expect.stringMatching(/^MyFunction.*/), 'Arn'] },
                    '/invocations',
                  ],
                ],
              },
            },
          },
          get: {
            'operationId': 'getItem',
            'responses': {},
            'x-amazon-apigateway-integration': {
              httpMethod: 'POST',
              responses: {},
              type: 'AWS',
              uri: {
                'Fn::Join': [
                  '',
                  [
                    'arn:aws:apigateway:',
                    {
                      Ref: 'AWS::Region',
                    },
                    ':dynamodb:action/GetItem',
                  ],
                ],
              },
              credentials: {
                'Fn::GetAtt': [
                  expect.stringMatching(/^MyRole.*/),
                  'Arn',
                ],
              },
              requestTemplates: {
                'application/json': {
                  'Fn::Join': [
                    '',
                    [
                      '{"TableName":"',
                      {
                        Ref: expect.stringMatching(/^MyTable.*/),
                      },
                      "\",\"Key\":{\"item\":{\"S\":\"$input.params('item')\"}}}",
                    ],
                  ],
                },
              },
            },
          },
        },
      },
      components: {
        securitySchemes: {
          MyCognitoAuthorizer: {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header',
            'x-amazon-apigateway-authtype': 'cognito_user_pools',
            'x-amazon-apigateway-authorizer': {
              type: 'cognito_user_pools',
              providerARNs: [
                {
                  'Fn::GetAtt': [
                    expect.stringMatching(/^MyUserPool.*/),
                    'Arn',
                  ],
                },
              ],
              authorizerResultTtlInSeconds: 300,
            },
          },
        },
      },
    },
    );


  });
});
