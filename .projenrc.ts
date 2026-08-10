import { AlmaCdkConstructLibrary } from "@alma-cdk/construct-library";
import { cdk } from "projen";

const MAJOR_VERSION = 2;
const NEXT_MAJOR_VERSION = MAJOR_VERSION + 1;

const project = new AlmaCdkConstructLibrary({
  name: "@alma-cdk/openapix",
  author: "Alma Media",
  authorAddress: "opensource@almamedia.dev",
  description: "Combine the power of AWS CDK & OpenAPI YAML Schema Definitions",
  repositoryUrl: "https://github.com/alma-cdk/openapix.git",
  stability: cdk.Stability.EXPERIMENTAL,
  majorVersion: MAJOR_VERSION,
  releaseEnvironment: "production",
  releaseBranches: {
    [`${NEXT_MAJOR_VERSION}.x`]: {
      majorVersion: NEXT_MAJOR_VERSION,
      prerelease: "beta",
      npmDistTag: "beta",
    },
  },
  keywords: [
    "cdk",
    "aws-cdk",
    "awscdk",
    "aws",
    "cloudfront",
    "api-gateway",
    "rest-api",
    "open-api",
    "swagger",
  ],
  // peerDeps: [
  //   'constructs',
  //   'aws-cdk-lib',
  // ],
  devDeps: [
    "constructs",
    "aws-cdk-lib",
    "@alma-cdk/construct-library",
    "@types/lodash",
    "@types/js-yaml",
    "@types/prettier@2.6.0",
    "@types/semver",
    "lodash",
  ],
  bundledDeps: ["change-case", "es-toolkit", "js-yaml", "semver"],
  pnpmSettings: {
    trustPolicyExclude: ["jsii@5.9.34"],
  },
  python: false,
  golang: false,
});

//   python: {
//     distName: 'alma-cdk.openapix',
//     module: 'alma_cdk.openapix',
//   },
// publishToGo: {
//   moduleName: 'github.com/alma-cdk/openapix-go',
// },

project.synth();
