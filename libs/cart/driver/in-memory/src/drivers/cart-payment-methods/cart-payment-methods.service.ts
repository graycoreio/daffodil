import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCartPaymentMethod,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod> {
  /**
   * The URL with which the driver makes calls to the backend.
   */
  readonly url = '/api/cart-payment-methods';

  constructor(private http: HttpClient) {}

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return this.http.get<DaffCartPaymentMethod[]>(`${this.url}/${cartId}`);
  }
}
