import { computeNpmTag } from './compute-npm-tag';

describe('computeNpmTag', () => {
  it('returns "latest" for a stable version', () => {
    expect(computeNpmTag('1.2.3')).toBe('latest');
  });

  it('returns "latest" for a zero-major stable version', () => {
    expect(computeNpmTag('0.92.2')).toBe('latest');
  });

  it('returns "next" for a release-candidate version', () => {
    expect(computeNpmTag('1.0.0-rc.1')).toBe('next');
  });

  it('returns "next" for a prerelease version', () => {
    expect(computeNpmTag('2.0.0-alpha.0')).toBe('next');
  });

  it('returns "next" for a beta version', () => {
    expect(computeNpmTag('0.93.0-beta.4')).toBe('next');
  });

  it('returns "next" for a build-metadata-only prerelease', () => {
    expect(computeNpmTag('1.0.0-0')).toBe('next');
  });
});
