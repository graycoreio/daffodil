import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCartShippingRate,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_SHIPPING_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartShippingInformationService extends DaffInMemoryDriverBase implements DaffCartShippingInformationServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_SHIPPING_COLLECTION_NAME);
  }

  get(cartId: DaffCart['id']): Observable<DaffCartShippingRate> {
    return this.http.get<DaffCartShippingRate>(`${this.url}/${cartId}`);
  }

  update(cartId: DaffCart['id'], info: Partial<DaffCartShippingRate>): Observable<Partial<DaffCart>> {
    return this.http.put<DaffCart>(`${this.url}/${cartId}`, info);
  }

  delete(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.http.delete<Partial<DaffCart>>(`${this.url}/${cartId}`);
  }
}
