const { awscdk, TextFile, javascript } = require('projen');

const nodejsVersion = '14.17.6';

const project = new awscdk.AwsCdkConstructLibrary({

  // Metadata
  stability: 'experimental',
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  name: '@alma-cdk/openapix',
  description: 'Generate API Gateway definition from OpenAPI schema',
  repositoryUrl: 'https://github.com/alma-cdk/openapix.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'cloudfront', 'api-gateway', 'rest-api', 'open-api', 'swagger'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  packageManager: javascript.NodePackageManager.NPM,
  //npmAccess: javascript.NpmAccess.PUBLIC,

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.24.1',
  constructsVersion: '10.0.0',
  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib', '@types/lodash', '@types/js-yaml'],
  bundledDeps: ['change-case', 'lodash', 'js-yaml', 'omit-deep-lodash'],

  // Gitignore
  gitignore: [
    '.DS_Store',
    '/examples/**/cdk.context.json',
    '/examples/**/node_modules',
    '/examples/**/cdk.out',
    '/examples/**/.git',
  ],


});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.addPackageIgnore('/examples/');


project.synth();
