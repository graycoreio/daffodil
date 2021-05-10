import {
  daffUriTruncateQueryFragment,
  daffUriTruncateFileExtension,
  daffUriTruncateLeadingSlash,
} from '@daffodil/core/routing';

/**
 * Truncates leading slash, file extension, query params, and fragments.
 */
export const magentoCategoryTruncateUrl = (url: string): string =>
  daffUriTruncateLeadingSlash(daffUriTruncateFileExtension(daffUriTruncateQueryFragment(url)));
