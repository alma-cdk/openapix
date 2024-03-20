import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  projenrcTs: true,
  jsiiVersion: '~5.3.24',

  // Metadata
  stability: 'experimental',
  author: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  name: '@alma-cdk/openapix',
  description: 'Combine the power of AWS CDK & OpenAPI YAML Schema Definitions',
  repositoryUrl: 'https://github.com/alma-cdk/openapix.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'cloudfront', 'api-gateway', 'rest-api', 'open-api', 'swagger'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  majorVersion: 0,
  releaseBranches: {
    beta: {
      majorVersion: 1,
      prerelease: 'beta',
      npmDistTag: 'beta',
    },
  },
  packageManager: javascript.NodePackageManager.NPM,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToPypi: {
    distName: 'alma-cdk.openapix',
    module: 'alma_cdk.openapix',
  },
  publishToGo: {
    moduleName: 'github.com/alma-cdk/openapix-go',
  },

  // Dependencies
  cdkVersion: '2.133.0',
  constructsVersion: '10.3.0',
  devDeps: [
    'semver',
    '@types/lodash',
    '@types/js-yaml',
    '@types/omit-deep-lodash',
    '@types/prettier@2.6.0',
    '@types/semver',
  ],
  bundledDeps: [
    'change-case',
    'lodash',
    'js-yaml',
    'omit-deep-lodash',
    'semver',
  ],

  // Gitignore
  gitignore: [
    '.DS_Store',
    '/examples/**/cdk.context.json',
    '/examples/**/node_modules',
    '/examples/**/cdk.out',
    '/examples/**/.git',
    '.vscode',
  ],


});


project.addPackageIgnore('/examples/');


project.synth();
