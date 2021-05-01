/**
 * Truncates the file extension from the end of the URI.
 * Captures the truncated URI in the `uri` named group.
 */
export const DAFF_TRUNCATE_FILE_EXTENSION_REGEX = /(?<uri>.+)\.(.*)$/;
/**
 * Truncates the file extension from the end of the URI.
 */
export const daffUriTruncateFileExtension = (uri: string): string =>
  uri.match(DAFF_TRUNCATE_FILE_EXTENSION_REGEX)?.groups.uri || uri;

/**
 * A regex to truncate the leading slash from a URI,
 * capturing the truncated in the `uri` group.
 * e.g. /foo/bar/baz.html -> baz.html
 */
export const DAFF_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX = /(.*\/)?(?<uri>.+)$/;
/**
 * Truncates the leading slash from a URI.
 * e.g. /foo/bar/baz.html -> baz.html
 */
export const daffUriTruncateLeadingPathSegments = (uri: string): string =>
  uri.match(DAFF_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX)?.groups.uri || uri;

/**
 * A regex to truncate leading path segments from a URI,
 * capturing the last segment in the `uri` group.
 * e.g. /foo/bar/baz.html -> foo/bar/baz.html
 */
export const DAFF_TRUNCATE_LEADING_SLASH_REGEX = /^\/?(?<uri>.+)$/;
/**
 * Truncates leading path segments from a URI.
 * e.g. /foo/bar/baz.html -> foo/bar/baz.html
 */
export const daffUriTruncateLeadingSlash = (uri: string): string =>
  uri.match(DAFF_TRUNCATE_LEADING_SLASH_REGEX)?.groups.uri || uri;

/**
 * A regex to truncate query parameters and fragments from a URI,
 * capturing the truncated section in the `uri` group.
 * e.g. /foo/bar/baz.html?thing=test#id -> /foo/bar/baz.html
 */
export const DAFF_TRUNCATE_QUERY_FRAGMENT_REGEX = /(?<uri>[^?#]+)[?#](.*)$/;
/**
 * Truncates query parameters and fragments from a URI.
 * e.g. /foo/bar/baz.html?thing=test#id -> /foo/bar/baz.html
 */
export const daffUriTruncateQueryFragment = (uri: string): string =>
  uri.match(DAFF_TRUNCATE_QUERY_FRAGMENT_REGEX)?.groups.uri || uri;
