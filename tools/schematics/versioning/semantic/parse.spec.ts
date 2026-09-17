import { parseSemanticVersion } from './parse';
import { SemanticVersionString } from './type';

describe('parseSemanticVersion', () => {

  it('should parse a version with a patch', () => {
    expect(parseSemanticVersion('2.4.7')).toEqual({
      major: 2,
      minor: 4,
      patch: 7,
    });
  });

  it('should return null for a non-version string', () => {
    expect(parseSemanticVersion(<SemanticVersionString>'not-a-version')).toBeNull();
  });
});
