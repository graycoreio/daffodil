import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartPaymentService implements DaffCartPaymentServiceInterface {
  url = '/api/cart-payment';

  constructor(private http: HttpClient) {}

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
