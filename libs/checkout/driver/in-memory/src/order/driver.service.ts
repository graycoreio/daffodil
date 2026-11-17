import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import { DaffCheckoutOrderServiceInterface } from '@daffodil/checkout/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME } from '../collection-names.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCheckoutOrderService extends DaffInMemoryDriverBase implements DaffCheckoutOrderServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME);
  }

  placeOrder(cartId: DaffCart['id']): Observable<DaffCheckoutOrderResult> {
    return this.http.post<DaffCheckoutOrderResult>(this.url, { cartId });
  }
}
