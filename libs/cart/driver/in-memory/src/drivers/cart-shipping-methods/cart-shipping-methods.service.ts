import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCartShippingRate,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_SHIPPING_METHODS_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartShippingMethodsService extends DaffInMemoryDriverBase implements DaffCartShippingMethodsServiceInterface<DaffCartShippingRate> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_SHIPPING_METHODS_COLLECTION_NAME);
  }

  list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]> {
    return this.http.get<DaffCartShippingRate[]>(`${this.url}/${cartId}`);
  }
}
