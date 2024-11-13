/**
 * The kind of asset to which a link preload header refers.
 * Not to be confused with `type`, this refers to the `as` value.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#as
 */
export enum DaffSsrHeadersLinkPreloadAssetKind {
  AUDIO = 'audio',
  DOCUMENT = 'document',
  EMBED = 'embed',
  FETCH = 'fetch',
  FONT = 'font',
  IMAGE = 'image',
  OBJECT = 'object',
  SCRIPT = 'script',
  STYLE = 'style',
  TRACK = 'track',
  VIDEO = 'video',
  WORKER = 'worker',
}
