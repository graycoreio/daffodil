const VERSION_REGEX = '\\d+\\.\\d+\\.\\d+';
const PRERELEASE_REMOVAL = 3;
const RELEASE_REMOVAL = 1;
const DEPRECATION_MESSAGE = 'Deprecated in version';
const REMOVAL_MESSAGE = 'Will be removed in version';
const HAS_ANNOTATION_REGEX = new RegExp(`${DEPRECATION_MESSAGE} ${VERSION_REGEX}\\. ${REMOVAL_MESSAGE} ${VERSION_REGEX}`);
const DEPRECATED_TAG_REGEX = /@deprecated([^*\n]*)(\n\*\/)?$/gm;

/**
 * Strips any prerelease suffix (e.g. `-rc.1`) from a semver version.
 */
export const getStableVersion = (version: string): string => version.split('-')[0];

const getPrereleaseRemovalVersion = (rootVersion: string): string =>
  [0, Number(rootVersion.split('.')[1]) + PRERELEASE_REMOVAL, 0].join('.');

const getReleaseRemovalVersion = (rootVersion: string): string =>
  [Number(rootVersion.split('.')[0]) + RELEASE_REMOVAL, 0, 0].join('.');

/**
 * Computes the version in which a symbol deprecated in the given version will be removed.
 * Pre-1.0 deprecations are removed three minor versions later; post-1.0 deprecations
 * are removed in the next major version.
 */
export const getRemovalVersion = (rootVersion: string): string =>
  rootVersion.startsWith('0')
    ? getPrereleaseRemovalVersion(rootVersion)
    : getReleaseRemovalVersion(rootVersion);

const buildAnnotation = (rootVersion: string): string =>
  ` ${DEPRECATION_MESSAGE} ${rootVersion}. ${REMOVAL_MESSAGE} ${getRemovalVersion(rootVersion)}.`;

/**
 * Appends deprecation and removal version annotations to every `@deprecated` JSDoc tag
 * in the given source content that is not already annotated.
 */
export const annotateDeprecations = (content: string, rootVersion: string): string =>
  content.replace(DEPRECATED_TAG_REGEX, (match, summary, end) =>
    match.match(HAS_ANNOTATION_REGEX)
      ? match
      : `@deprecated${summary || ''}${buildAnnotation(rootVersion)}${end || ''}`);

/**
 * Whether the given source content contains a symbol that is marked for removal
 * in the given version.
 */
export const hasRemovalMarker = (content: string, version: string): boolean =>
  content.includes(`${REMOVAL_MESSAGE} ${version}`);
