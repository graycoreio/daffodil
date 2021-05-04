/**
 * Truncates query parameters and fragments from a URI.
 * e.g. /foo/bar/baz.html?thing=test#id -> /foo/bar/baz.html
 * Note that this will not work as expected unless `uri` has a leading slash.
 */
export const daffUriTruncateQueryFragment = (uri: string): string =>
  (new URL(`http://fakedomain.com${uri}`)).pathname;
