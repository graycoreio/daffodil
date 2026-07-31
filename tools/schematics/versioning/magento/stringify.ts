import {
  MagentoVersion,
  MagentoVersionString,
} from './type';

/**
 * Turns a {@link MagentoVersion} into a {@link MagentoVersionString}.
 */
export const stringifyMagentoVersion = (version: MagentoVersion): MagentoVersionString =>
  version.patch
    ? `${version.major}.${version.minor}.${version.fakePatch}-p${version.patch}`
    : `${version.major}.${version.minor}.${version.fakePatch}`;
