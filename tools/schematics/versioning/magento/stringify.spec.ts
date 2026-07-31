import { parseMagentoVersion } from './parse';
import { stringifyMagentoVersion } from './stringify';

describe('stringifyMagentoVersion', () => {
  it('should stringify a version without a patch', () => {
    expect(stringifyMagentoVersion({ major: 2, minor: 4, fakePatch: 7 })).toBe('2.4.7');
  });

  it('should stringify a version with a patch', () => {
    expect(stringifyMagentoVersion({ major: 2, minor: 4, fakePatch: 7, patch: 3 })).toBe('2.4.7-p3');
  });

  it('should round-trip with parseMagentoVersion', () => {
    const original = '2.4.6-p2';
    expect(stringifyMagentoVersion(parseMagentoVersion(original)!)).toBe(original);
  });
});
