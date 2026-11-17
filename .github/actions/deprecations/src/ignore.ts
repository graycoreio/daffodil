import { matchesGlob } from 'path';

/**
 * Parses a multiline action input into a list of glob patterns.
 * Blank lines and lines starting with `#` are skipped.
 */
export const parseGlobs = (input: string | undefined): Array<string> =>
  (input || '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

/**
 * Whether the given path matches any of the given glob patterns.
 */
export const isIgnored = (path: string, globs: Array<string>): boolean =>
  globs.some((glob) => matchesGlob(path, glob));
