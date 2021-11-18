import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { omit } from 'lodash';
import { OpenApiXDefinition, OpenApiXDefinitionProps } from './definition';

export interface OpenApiXProps extends OpenApiXDefinitionProps {
  readonly restApiProps: apigateway.RestApiBaseProps;
}

export class OpenApiX extends cdk.Construct {
  public readonly api: apigateway.IRestApi;

  constructor(scope: cdk.Construct, id: string, props: OpenApiXProps) {
    super(scope, id);

    const { restApiProps } = props;

    const apiDefinition = new OpenApiXDefinition(this, omit(props, 'restApiProps'));

    const api = new apigateway.SpecRestApi(this, 'SpecRestApi', {
      apiDefinition,
      ...restApiProps,
    });

    this.api = api;

  }
}
