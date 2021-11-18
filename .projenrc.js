const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Alma Media',
  authorAddress: 'opensource@almamedia.fi',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: '@almamedia-open-source/cdk-openapix',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-openapix.git',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-s3-assets',
    '@aws-cdk/aws-lambda',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@types/js-yaml',
    '@types/lodash',
  ],

  bundledDeps: [
    'js-yaml',
    'lodash',

  ],

  gitignore: ['.DS_Store', 'TODO.compiled.yaml'],

  licensed: false, // TODO change after opensourced

  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();
