import {
  SemanticVersion,
  SemanticVersionString,
} from './type';

/**
 * Turns a {@link SemanticVersion} into a {@link SemanticVersionString}.
 */
export const stringifySemanticVersion = (version: SemanticVersion): SemanticVersionString =>
  `${version.major}.${version.minor}.${version.patch}`;
