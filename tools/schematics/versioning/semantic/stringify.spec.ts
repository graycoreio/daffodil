import { parseSemanticVersion } from './parse';
import { stringifySemanticVersion } from './stringify';

describe('stringifySemanticVersion', () => {
  it('should stringify a version with a patch', () => {
    expect(stringifySemanticVersion({ major: 2, minor: 4, patch: 3 })).toBe('2.4.3');
  });

  it('should round-trip with parseSemanticVersion', () => {
    const original = '2.4.6';
    expect(stringifySemanticVersion(parseSemanticVersion(original)!)).toBe(original);
  });
});
