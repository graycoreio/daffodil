import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartStoreCreditDriverInterface } from '@daffodil/cart-store-credit/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_STORE_CREDIT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The cart store credit in-memory driver to mock the cart store credit backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartStoreCreditInMemoryDriver extends DaffInMemoryDriverBase implements DaffCartStoreCreditDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_STORE_CREDIT_IN_MEMORY_COLLECTION_NAME);
  }

  apply(cartId: DaffCartWithStoreCredit['id']): Observable<DaffCartWithStoreCredit> {
    return this.http.post<DaffCartWithStoreCredit>(`${this.url}/${cartId}`, {});
  }

  remove(cartId: DaffCartWithStoreCredit['id']): Observable<DaffCartWithStoreCredit> {
    return this.http.delete<DaffCartWithStoreCredit>(`${this.url}/${cartId}`);
  }
}
