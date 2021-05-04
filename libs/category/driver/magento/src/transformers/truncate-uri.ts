import {
  daffUriTruncateQueryFragment,
  daffUriTruncateFileExtension,
  daffUriTruncateLeadingSlash,
} from '@daffodil/core/routing';

/**
 * Truncates leading slash, file extension, query params, and fragments.
 */
export const magentoCategoryTruncateUri = (uri: string): string =>
  daffUriTruncateLeadingSlash(daffUriTruncateFileExtension(daffUriTruncateQueryFragment(uri)));
