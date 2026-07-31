import { magentoCompareVersions } from './compare';
import { MagentoVersion } from './type';

describe('magentoCompareVersions', () => {
  const v = (major: number, minor: number, fakePatch: number, patch?: number): MagentoVersion =>
    ({ major, minor, fakePatch, patch });

  it('should return 0 for equal versions', () => {
    expect(magentoCompareVersions(v(2, 4, 7), v(2, 4, 7))).toBe(0);
  });

  it('should return 0 for equal versions with patch', () => {
    expect(magentoCompareVersions(v(2, 4, 7, 3), v(2, 4, 7, 3))).toBe(0);
  });

  it('should return 1 when a has a higher major', () => {
    expect(magentoCompareVersions(v(3, 0, 0), v(2, 4, 7))).toBe(1);
  });

  it('should return -1 when a has a lower major', () => {
    expect(magentoCompareVersions(v(2, 4, 7), v(3, 0, 0))).toBe(-1);
  });

  it('should return 1 when a has a higher minor', () => {
    expect(magentoCompareVersions(v(2, 5, 0), v(2, 4, 7))).toBe(1);
  });

  it('should return -1 when a has a lower minor', () => {
    expect(magentoCompareVersions(v(2, 4, 7), v(2, 5, 0))).toBe(-1);
  });

  it('should return 1 when a has a higher fakePatch', () => {
    expect(magentoCompareVersions(v(2, 4, 8), v(2, 4, 7))).toBe(1);
  });

  it('should return -1 when a has a lower fakePatch', () => {
    expect(magentoCompareVersions(v(2, 4, 7), v(2, 4, 8))).toBe(-1);
  });

  it('should return 1 when a has a higher patch', () => {
    expect(magentoCompareVersions(v(2, 4, 7, 2), v(2, 4, 7, 1))).toBe(1);
  });

  it('should return -1 when a has a lower patch', () => {
    expect(magentoCompareVersions(v(2, 4, 7, 1), v(2, 4, 7, 2))).toBe(-1);
  });

  it('should treat a missing patch as 0', () => {
    expect(magentoCompareVersions(v(2, 4, 7), v(2, 4, 7, 1))).toBe(-1);
    expect(magentoCompareVersions(v(2, 4, 7, 1), v(2, 4, 7))).toBe(1);
  });
});
