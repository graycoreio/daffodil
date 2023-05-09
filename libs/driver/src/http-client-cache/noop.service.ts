import { Injectable } from '@angular/core';

import { DaffDriverHttpClientCacheServiceInterface } from './service.type';

/**
 * A noop service. Always does nothing for every single method.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDriverHttpClientCacheNoopService implements DaffDriverHttpClientCacheServiceInterface {
  reset(): void {}
}
