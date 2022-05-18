import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { generateHttpXAmazonIntegration } from '../x-amazon-integration/http';
import { Integration } from './base';

export interface HttpIntegrationProps extends apigateway.HttpIntegrationProps {
  readonly validator?: string;
}

export class HttpIntegration extends Integration {
  constructor(scope: Construct, url: string, props?: HttpIntegrationProps) {
    super();
    this.xAmazonApiGatewayRequestValidator = props?.validator;
    this.xAmazonIntegration = generateHttpXAmazonIntegration(scope, url, props);
  }
}
