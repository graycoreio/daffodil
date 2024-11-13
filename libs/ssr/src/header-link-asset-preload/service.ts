import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffSsrHeadersLinkPreloadAssetKind } from './kind.enum';
import { DaffSsrHeadersLinkPreloadAssetPriority } from './priority.enum';
import {
  DAFF_SSR_RESPONSE,
  DaffSsrResponse,
} from '../response/public_api';

/**
 * Adds headers to the response that will preload the specified assets.
 * Very useful for optimizing initial page load.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSsrHeaderLinkAssetPreloader {
  constructor(
    @Inject(DAFF_SSR_RESPONSE) private response: DaffSsrResponse,
  ) {}
  /**
   * Adds a link preload header to the SSR response.
   *
   * @param uri The URI of the asset to preload. Take care that this is percent-encoded. @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link#encoding_urls
   * @param extra Any extra values to add to the header. The key is the name of the param, the value is the value.
   */
  addHeader(
    uri: string,
    kind: DaffSsrHeadersLinkPreloadAssetKind,
    priority: DaffSsrHeadersLinkPreloadAssetPriority,
    extra: Record<string, string> = {},
  ): void {
    const params: Record<string, string> = {
      rel: 'preload',
      as: kind,
      fetchpriority: priority,
      ...extra,
    };
    this.response.append(
      'Link',
      Object.keys(params).reduce(
        (acc, name) =>
          `${acc}; ${name}=${params[name]}`,
        `<${uri}>`,
      ),
    );
  };
}
