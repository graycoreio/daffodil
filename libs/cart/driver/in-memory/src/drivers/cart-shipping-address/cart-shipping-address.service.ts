import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_SHIPPING_ADDRESS_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartShippingAddressService extends DaffInMemoryDriverBase implements DaffCartShippingAddressServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_SHIPPING_ADDRESS_COLLECTION_NAME);
  }

  get(cartId: DaffCart['id']): Observable<DaffCartAddress> {
    return this.http.get<DaffCartAddress>(`${this.url}/${cartId}`);
  }

  update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.http.put<Partial<DaffCart>>(`${this.url}/${cartId}`, address);
  }
}
