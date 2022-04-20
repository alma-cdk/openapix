const { awscdk, TextFile, javascript } = require('projen');

const nodejsVersion = '14.17.6';

const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  defaultReleaseBranch: 'main',
  name: '@almamedia-open-source/cdk-openapix',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-openapix.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  npmAccess: javascript.NpmAccess.PUBLIC,

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.1.0',
  constructsVersion: '10.0.0',
  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib', '@types/lodash', '@types/js-yaml'],
  bundledDeps: ['change-case', 'lodash', 'js-yaml', 'omit-deep-lodash'],

  // Gitignore
  gitignore: ['.DS_Store'],
});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.synth();
