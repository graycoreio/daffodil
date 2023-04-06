import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { DaffDriverHttpClientCacheServiceInterface } from '@daffodil/driver';

/**
 * Interacts with the Apollo client.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDriverHttpClientCacheMagentoService implements DaffDriverHttpClientCacheServiceInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  reset(): void {
    this.apollo.client.clearStore();
  }
}
