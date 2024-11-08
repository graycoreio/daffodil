/**
 * The fetch priority of the asset to which a link preload header refers.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#fetchpriority
 */
export enum DaffSsrHeadersLinkPreloadAssetPriority {
  HIGH = 'high',
  LOW = 'low',
  AUTO = 'auto',
}
