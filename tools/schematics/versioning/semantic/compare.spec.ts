import { semanticCompareVersions } from './compare';
import { SemanticVersion } from './type';

describe('semanticCompareVersions', () => {
  const v = (major: number, minor: number, patch: number): SemanticVersion =>
    ({ major, minor, patch });

  it('should return 0 for equal versions', () => {
    expect(semanticCompareVersions(v(2, 4, 7), v(2, 4, 7))).toBe(0);
  });

  it('should return 1 when a has a higher major', () => {
    expect(semanticCompareVersions(v(3, 0, 0), v(2, 4, 7))).toBe(1);
  });

  it('should return -1 when a has a lower major', () => {
    expect(semanticCompareVersions(v(2, 4, 7), v(3, 0, 0))).toBe(-1);
  });

  it('should return 1 when a has a higher minor', () => {
    expect(semanticCompareVersions(v(2, 5, 0), v(2, 4, 7))).toBe(1);
  });

  it('should return -1 when a has a lower minor', () => {
    expect(semanticCompareVersions(v(2, 4, 7), v(2, 5, 0))).toBe(-1);
  });

  it('should return 1 when a has a higher fakePatch', () => {
    expect(semanticCompareVersions(v(2, 4, 8), v(2, 4, 7))).toBe(1);
  });

  it('should return -1 when a has a lower fakePatch', () => {
    expect(semanticCompareVersions(v(2, 4, 7), v(2, 4, 8))).toBe(-1);
  });
});
