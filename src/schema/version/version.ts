import * as semver from 'semver';
const prefixRegex = /^[=|v]/i;


export function getValidVersion(range: string, version?: string): string {

  if (isPrefixed(version)) {
    const message = 'Do not prefix the version value';
    throw new Error(message);
  }

  const coerced = semver.coerce(version)?.version;

  if (!isValid(coerced)) {
    const message = `Invalid OpenApi version "${version}"`;
    throw new Error(message);
  }


  if (!isSupported(range, coerced)) {
    const message = `Unsupported OpenApi version "${coerced}": Must be ${range}`;
    throw new Error(message);
  }

  return coerced;
}

function isPrefixed(version?: string): boolean {
  return (typeof version === 'string' && prefixRegex.test(version));
}

function isValid(version?: string): version is string {
  return typeof semver.valid(version) === 'string';
}

function isSupported(range: string, version: string): boolean {
  return semver.satisfies(version, range);
}
