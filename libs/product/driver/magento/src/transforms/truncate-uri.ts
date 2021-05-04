import {
  daffUriTruncateQueryFragment,
  daffUriTruncateFileExtension,
  daffUriTruncateLeadingPathSegments,
} from '@daffodil/core/routing';

/**
 * Truncates leading path segments, file extension, query params, and fragments.
 */
export const magentoProductTruncateUri = (uri: string): string =>
  daffUriTruncateLeadingPathSegments(daffUriTruncateFileExtension(daffUriTruncateQueryFragment(uri)));
