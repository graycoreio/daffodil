import { magentoFindSupportedVersion } from './find-supported';
import { MagentoVersionString } from './type';

describe('magentoFindSupportedVersion', () => {
  const supported: Array<MagentoVersionString> = ['2.4.5', '2.4.6', '2.4.7'];

  describe('when the target is an exact match in supportedVersions', () => {
    it('should return the target', () => {
      expect(magentoFindSupportedVersion(supported, '2.4.6')).toBe('2.4.6');
    });
  });

  describe('when the target is between two supported versions', () => {
    it('should return the nearest older supported version', () => {
      const withPatches: Array<MagentoVersionString> = ['2.4.5', '2.4.7'];
      expect(magentoFindSupportedVersion(withPatches, '2.4.6')).toBe('2.4.5');
    });
  });

  describe('when the target is newer than all supported versions', () => {
    it('should return the newest supported version', () => {
      expect(magentoFindSupportedVersion(supported, '2.4.9')).toBe('2.4.7');
    });
  });

  describe('when the target is older than all supported versions', () => {
    it('should return null', () => {
      expect(magentoFindSupportedVersion(supported, '2.4.4')).toBeNull();
    });
  });

  describe('when supportedVersions is empty', () => {
    it('should return null', () => {
      expect(magentoFindSupportedVersion([], '2.4.7')).toBeNull();
    });
  });

  describe('when the target has a patch version', () => {
    it('should return the target if it is an exact match', () => {
      const withPatches: Array<MagentoVersionString> = ['2.4.7', '2.4.7-p2', '2.4.7-p4'];
      expect(magentoFindSupportedVersion(withPatches, '2.4.7-p2')).toBe('2.4.7-p2');
    });

    it('should return the nearest older patch version if not an exact match', () => {
      const withPatches: Array<MagentoVersionString> = ['2.4.7', '2.4.7-p2', '2.4.7-p4'];
      expect(magentoFindSupportedVersion(withPatches, '2.4.7-p3')).toBe('2.4.7-p2');
    });

    it('should return the base version when the patch target is older than the first supported patch', () => {
      const withPatches: Array<MagentoVersionString> = ['2.4.7', '2.4.7-p2'];
      expect(magentoFindSupportedVersion(withPatches, '2.4.7-p1')).toBe('2.4.7');
    });
  });

  describe('when the target cannot be parsed', () => {
    it('should return null', () => {
      expect(magentoFindSupportedVersion(supported, 'not-a-version' as MagentoVersionString)).toBeNull();
    });
  });
});
