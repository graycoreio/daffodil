/**
 * Truncates the file extension from the end of the URI.
 * Captures the truncated URI in the `uri` named group.
 */
export const DAFF_TRUNCATE_FILE_EXTENSION_REGEX = /(.*)(?=\.)/;
/**
 * Truncates the file extension from the end of the URI.
 */
export const daffUriTruncateFileExtension = (uri: string): string => uri.match(DAFF_TRUNCATE_FILE_EXTENSION_REGEX)?.[0] || uri;
