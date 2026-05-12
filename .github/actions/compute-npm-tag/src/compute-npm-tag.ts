/**
 * The set of npm distribution tags this action emits.
 */
export type NpmTag = 'latest' | 'next';

/**
 * Computes the npm publish tag for a given semver version.
 * Prerelease versions (those containing a `-`, e.g. `1.0.0-rc.1`) publish under `next`;
 * stable versions publish under `latest`.
 */
export const computeNpmTag = (version: string): NpmTag =>
  version.includes('-') ? 'next' : 'latest';
