import { Annotations } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export function addError(scope: Construct, message: string): void {
  Annotations.of(scope).addError(message);
}
