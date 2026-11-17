import {
  isIgnored,
  parseGlobs,
} from './ignore';

describe('parseGlobs', () => {
  it('returns an empty list for an empty or missing input', () => {
    expect(parseGlobs(undefined)).toEqual([]);
    expect(parseGlobs('')).toEqual([]);
  });

  it('splits on newlines, trimming whitespace and dropping blank and comment lines', () => {
    expect(parseGlobs('  libs/a/**  \n\n# comment\nlibs/b/*.ts\n')).toEqual([
      'libs/a/**',
      'libs/b/*.ts',
    ]);
  });
});

describe('isIgnored', () => {
  const globs = [
    'libs/legacy/**',
    'libs/**/testing/**',
    'libs/core/src/exact.ts',
  ];

  it('matches a file under a directory glob', () => {
    expect(isIgnored('libs/legacy/src/deep/file.ts', globs)).toBeTrue();
  });

  it('matches a globstar in the middle of a pattern', () => {
    expect(isIgnored('libs/cart/driver/testing/src/factory.ts', globs)).toBeTrue();
  });

  it('matches an exact path', () => {
    expect(isIgnored('libs/core/src/exact.ts', globs)).toBeTrue();
  });

  it('does not match paths outside the globs', () => {
    expect(isIgnored('libs/core/src/other.ts', globs)).toBeFalse();
  });

  it('ignores nothing when there are no globs', () => {
    expect(isIgnored('libs/legacy/src/file.ts', [])).toBeFalse();
  });
});
