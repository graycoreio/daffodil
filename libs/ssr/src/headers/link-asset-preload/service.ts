import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffSsrHeadersLinkPreloadAssetKind } from './kind.enum';
import { DaffSsrHeadersLinkPreloadAssetPriority } from './priority.enum';
import { DAFF_SSR_HEADER_SERVICE } from '../service.token';
import { DaffSsrHeaderService } from '../service.type';

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
  private _counter = 0;

  constructor(
    @Inject(DAFF_SSR_HEADER_SERVICE) private headerService: DaffSsrHeaderService,
  ) {}
  /**
   * Adds a link preload header to the SSR response.
   *
   * @param uri The URI of the asset to preload. Take care that this is percent-encoded. @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link#encoding_urls
   * @param extra Any extra values to add to the header. The first value of the tuple is the name of the param, the second is the value.
   */
  addHeader(uri: string, kind: DaffSsrHeadersLinkPreloadAssetKind, priority: DaffSsrHeadersLinkPreloadAssetPriority, extra: Record<string, string> = {}): void {
    this._counter++;
    if (this._counter > 6) {
      console.warn('Adding more than 6 preloaded assets is discouraged. Most browsers have a default parallel HTTP request limit of 6 so more than 6 preloads may have unexpected behavior.');
    }

    const params: Record<string, string> = {
      rel: 'preload',
      as: kind,
      fetchpriority: priority,
      ...extra,
    };
    this.headerService.addResponseHeader(
      'Link',
      Object.keys(params).reduce(
        (acc, name) =>
          `${acc}; ${name}=${params[name]}`,
        `<${uri}>`,
      ),
    );
  };
}
