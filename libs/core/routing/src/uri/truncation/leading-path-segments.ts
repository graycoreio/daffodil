/**
 * Truncates leading path segments from a URI.
 * e.g. /foo/bar/baz.html -> baz.html
 */
export const daffUriTruncateLeadingPathSegments = (uri: string): string =>
  uri.split('/').pop();
