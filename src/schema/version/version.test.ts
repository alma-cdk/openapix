import { getValidVersion } from './version';

describe('Schema', () => {
  describe('Version', () => {
    test('missing version', () => {
      expect(() => getValidVersion('3.0.x')).toThrowError('Invalid OpenApi version "undefined"');
    });
    test('incorrect version', () => {
      expect(() => getValidVersion('3.0.x', 'a.b.c')).toThrowError('Invalid OpenApi version "a.b.c"');
    });
    test('incorrect version (with prefix)', () => {
      expect(() => getValidVersion('3.0.x', 'v3.0.3')).toThrowError('Do not prefix the version value');
    });
    test('unsupported version (3.1.0)', () => {
      expect(() => getValidVersion('3.0.x', '3.1.0')).toThrowError('Unsupported OpenApi version "3.1.0": Must be 3.0.x');
    });
    test('unsupported future version (5.0.0)', () => {
      expect(() => getValidVersion('>= 3.0.0 | < 5', '5.0.0')).toThrowError('Unsupported OpenApi version "5.0.0": Must be >= 3.0.0 | < 5');
    });
    test('supported major.minor.patch version (3.0.3)', () => {
      expect(getValidVersion('3.0.x', '3.0.3')).toBe('3.0.3');
    });
    test('supported major.minor version (3.0)', () => {
      expect(getValidVersion('3.0.x', '3.0')).toBe('3.0.0');
    });
    test('supported major version (3)', () => {
      expect(getValidVersion('3.0.x', '3.0')).toBe('3.0.0');
    });
  });
});
