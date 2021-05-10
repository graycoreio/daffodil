import {
  daffUriTruncateQueryFragment,
  daffUriTruncateFileExtension,
  daffUriTruncateLeadingPathSegments,
} from '@daffodil/core/routing';

/**
 * Truncates leading path segments, file extension, query params, and fragments.
 */
export const magentoProductTruncateUrl = (url: string): string =>
  daffUriTruncateLeadingPathSegments(daffUriTruncateFileExtension(daffUriTruncateQueryFragment(url)));
