import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartOrderService implements DaffCartOrderServiceInterface {
  /**
   * The URL with which the driver makes calls to the backend.
   */
  readonly url = '/api/cart-order';

  constructor(private http: HttpClient) {}

  placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult> {
    return this.http.post<DaffCartOrderResult>(`${this.url}/${cartId}/`, { payment });
  }
}
