import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_PAYMENT_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartPaymentService extends DaffInMemoryDriverBase implements DaffCartPaymentServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_PAYMENT_COLLECTION_NAME);
  }

  get(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod> {
    return this.http.get<DaffCartPaymentMethod>(`${this.url}/${cartId}`);
  }

  update(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>> {
    return this.http.put<DaffCart>(`${this.url}/${cartId}`, { payment });
  }

  updateWithBilling(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    address: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    return this.http.put<DaffCart>(`${this.url}/${cartId}`, { payment, address });
  }

  remove(cartId: DaffCart['id']): Observable<void> {
    return this.http.delete<void>(`${this.url}/${cartId}`);
  }
}
