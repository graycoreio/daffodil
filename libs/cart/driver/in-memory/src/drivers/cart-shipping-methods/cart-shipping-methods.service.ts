import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCartShippingRate,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface<DaffCartShippingRate> {
  /**
   * The URL with which the driver makes calls to the backend.
   */
  readonly url = '/api/cart-shipping-methods';

  constructor(private http: HttpClient) {}

  list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]> {
    return this.http.get<DaffCartShippingRate[]>(`${this.url}/${cartId}`);
  }
}
