import { Stack } from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';

export function expectNoErrorAnnotations(stack: Stack): void {
  Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
}