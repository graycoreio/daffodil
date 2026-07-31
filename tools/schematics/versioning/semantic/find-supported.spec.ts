import { semanticFindSupportedVersion } from './find-supported';
import { SemanticVersionString } from './type';

describe('semanticFindSupportedVersion', () => {
  const supported: Array<SemanticVersionString> = ['2.4.5', '2.4.6', '2.4.7'];

  describe('when the target is an exact match in supportedVersions', () => {
    it('should return the target', () => {
      expect(semanticFindSupportedVersion(supported, '2.4.6')).toBe('2.4.6');
    });
  });

  describe('when the target is between two supported versions', () => {
    it('should return the nearest older supported version', () => {
      const withPatches: Array<SemanticVersionString> = ['2.4.5', '2.4.7'];
      expect(semanticFindSupportedVersion(withPatches, '2.4.6')).toBe('2.4.5');
    });
  });

  describe('when the target is newer than all supported versions', () => {
    it('should return the newest supported version', () => {
      expect(semanticFindSupportedVersion(supported, '2.4.9')).toBe('2.4.7');
    });
  });

  describe('when the target is older than all supported versions', () => {
    it('should return null', () => {
      expect(semanticFindSupportedVersion(supported, '2.4.4')).toBeNull();
    });
  });

  describe('when supportedVersions is empty', () => {
    it('should return null', () => {
      expect(semanticFindSupportedVersion([], '2.4.7')).toBeNull();
    });
  });

  describe('when the target cannot be parsed', () => {
    it('should return null', () => {
      expect(semanticFindSupportedVersion(supported, 'not-a-version' as SemanticVersionString)).toBeNull();
    });
  });
});
