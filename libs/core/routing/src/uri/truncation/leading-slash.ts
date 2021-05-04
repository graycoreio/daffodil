/**
 * A regex to truncate the leading slash from a URI,
 * capturing the truncated in the `uri` group.
 * e.g. /foo/bar/baz.html -> foo/bar/baz.html
 */
export const DAFF_TRUNCATE_LEADING_SLASH_REGEX = /^\/?(?<uri>.+)$/;
/**
 * Truncates the leading slash from a URI.
 * e.g. /foo/bar/baz.html -> foo/bar/baz.html
 */
export const daffUriTruncateLeadingSlash = (uri: string): string =>
  uri.match(DAFF_TRUNCATE_LEADING_SLASH_REGEX)?.groups.uri || uri;
