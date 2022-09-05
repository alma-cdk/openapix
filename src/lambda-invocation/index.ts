import { Stack } from 'aws-cdk-lib';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaInvocation {

  /** Lambda API version. */
  public static readonly apiVersion: string = '2015-03-31';

  private static readonly service: string = 'apigateway';
  private static readonly resourceType: string = 'lambda';

  /** Invocation URI ARN used by API Gateway. */
  public readonly uri: string;

  private readonly partition: string;
  private readonly region: string;
  private readonly functionArn: string;

  constructor(scope: Construct, fn: IFunction) {
    const stack = Stack.of(scope);
    this.partition = stack.partition;
    this.region = stack.region;
    this.functionArn = fn.functionArn;
    this.uri = this.resolveUri(this.partition, this.region, this.functionArn);
  }

  private resolveArnResource(partition: string, region: string): string {
    return [
      'arn',
      partition,
      LambdaInvocation.service,
      region,
      LambdaInvocation.resourceType,
    ].join(':');
  }

  private resolveArnResourcePath(functionArn: string): string {
    return [
      'path',
      LambdaInvocation.apiVersion,
      'functions',
      functionArn,
      'invocations',
    ].join('/');
  }

  private resolveUri(partition: string, region: string, functionArn: string): string {
    const arnResource = this.resolveArnResource(partition, region);
    const arnPath = this.resolveArnResourcePath(functionArn);
    return `${arnResource}:${arnPath}`;
  }
}
