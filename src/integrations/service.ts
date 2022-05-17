import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateServiceXAmazonIntegration } from '../x-amazon-integration/service';
import { Integration } from './base';

export interface AwsIntegrationProps extends apigateway.AwsIntegrationProps {
  validator?: string;
}

export class AwsIntegration extends Integration {
  constructor(scope: Construct, props: AwsIntegrationProps) {
    super();
    this.xAmazonApiGatewayRequestValidator = props.validator;
    this.xAmazonIntegration = generateServiceXAmazonIntegration(scope, props);
  }
}
