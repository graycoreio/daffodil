/**
 * Truncates the file extension from the end of the URI.
 * Captures the truncated URI in the `uri` named group.
 */
export const DAFF_TRUNCATE_FILE_EXTENSION_REGEX = /(?<uri>.+)\.(.*)$/;

/**
 * A regex to truncate the leading slash from a URI,
 * capturing the truncated in the `uri` group.
 * i.e. /foo/bar/baz.html -> baz.html
 */
export const DAFF_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX = /(.*\/)?(?<uri>.+)$/;

/**
 * A regex to truncate leading path segments from a URI,
 * capturing the last segment in the `uri` group.
 * i.e. /foo/bar/baz.html -> foo/bar/baz.html
 */
export const DAFF_TRUNCATE_LEADING_SLASH_REGEX = /^\/?(?<uri>.+)$/;
