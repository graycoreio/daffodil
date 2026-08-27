import { parseMagentoVersion } from './parse';
import { MagentoVersionString } from './type';

describe('parseMagentoVersion', () => {
  it('should parse a version without a patch', () => {
    expect(parseMagentoVersion('2.4.7')).toEqual({
      major: 2,
      minor: 4,
      fakePatch: 7,
      patch: undefined,
    });
  });

  it('should parse a version with a patch', () => {
    expect(parseMagentoVersion('2.4.7-p3')).toEqual({
      major: 2,
      minor: 4,
      fakePatch: 7,
      patch: 3,
    });
  });

  it('should parse 2.4.0', () => {
    expect(parseMagentoVersion('2.4.0')).toEqual({
      major: 2,
      minor: 4,
      fakePatch: 0,
      patch: undefined,
    });
  });

  it('should return null for a non-version string', () => {
    expect(parseMagentoVersion('not-a-version' as MagentoVersionString)).toBeNull();
  });
});
