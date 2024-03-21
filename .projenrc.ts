import { TextFile, awscdk, javascript } from 'projen';
import { WorkflowSteps } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';

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


/**
 * Sonarcloud report workflow
 */
const sonarCloudReportWorkflow = project.github?.addWorkflow('sonarcloud-report');
sonarCloudReportWorkflow?.on({
  push: { branches: ['main', 'beta'] },
  pullRequest: {
    types: ['opened', 'synchronize', 'reopened'],
  },
});
sonarCloudReportWorkflow?.addJob('sonarcloud-report', {
  runsOn: ['ubuntu-latest'],
  permissions: {
    contents: JobPermission.READ,
  },
  steps: [
    WorkflowSteps.checkout({
      with: {
        fetchDepth: 0,
      },
    }),
    ...project.renderWorkflowSetup(),
    {
      name: 'Run tests',
      run: 'npm run test',
    },
    {
      name: 'SonarCloud Scan',
      uses: 'SonarSource/sonarcloud-github-action@v2',
      env: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
        SONAR_TOKEN: '${{ secrets.SONAR_TOKEN }}',
      },
    },
  ],
});

/**
 * Sonarcloud properties file
 */
new TextFile(project, 'sonar-project.properties', {
  lines: [
    'sonar.host.url=https://sonarcloud.io',
    `sonar.projectKey=${project.name.replace('@', '').replace('/', '_')}`,
    `sonar.organization=${project.name.replace('@', '').split('/')[0]}`,
    'sonar.javascript.lcov.reportPaths=./coverage/lcov.info',
    'sonar.sources=./src',
    'sonar.tests=./test',
  ],
});

/**
 * .nvmrc file
 */
new TextFile(project, '.nvmrc', {
  lines: ['20.11.1'],
});

project.synth();
