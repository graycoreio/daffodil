import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_ORDER_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartOrderService extends DaffInMemoryDriverBase implements DaffCartOrderServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_ORDER_COLLECTION_NAME);
  }

  placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult> {
    return this.http.post<DaffCartOrderResult>(`${this.url}/${cartId}/`, { payment });
  }
}
