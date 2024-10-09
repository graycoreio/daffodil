import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCartPaymentMethod,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_PAYMENT_METHODS_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartPaymentMethodsService extends DaffInMemoryDriverBase implements DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_PAYMENT_METHODS_COLLECTION_NAME);
  }

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return this.http.get<DaffCartPaymentMethod[]>(`${this.url}/${cartId}`);
  }
}
