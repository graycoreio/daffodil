import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartOrderServiceInterface,
  DaffCartPaymentMethod,
  DaffCartOrderResult
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartOrderService implements DaffCartOrderServiceInterface {
  url = '/api/cart-order';

  constructor(private http: HttpClient) {}

  placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult> {
    return this.http.post<DaffCartOrderResult>(`${this.url}/${cartId}/`, {payment});
  }
}
