import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffCartShippingMethodsServiceInterface,
  DaffCart,
  DaffCartShippingRate
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface<DaffCartShippingRate> {
  url = '/api/cart-shipping-methods';

  constructor(private http: HttpClient) {}

  list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]> {
    return this.http.get<DaffCartShippingRate[]>(`${this.url}/${cartId}`)
  }
}
