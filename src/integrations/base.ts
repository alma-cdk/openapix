import { XAmazonIntegration } from '../x-amazon-integration/base';


export abstract class Integration {
  public xAmazonApiGatewayRequestValidator?: string;
  public xAmazonIntegration!: XAmazonIntegration;
}
