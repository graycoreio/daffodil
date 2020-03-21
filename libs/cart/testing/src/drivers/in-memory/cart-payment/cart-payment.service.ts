import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartPaymentServiceInterface
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartPaymentService implements DaffCartPaymentServiceInterface<DaffCartPaymentMethod, DaffCart> {
  url = '/api/cart-payment';

  constructor(private http: HttpClient) {}

  get(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod> {
    return this.http.get<DaffCartPaymentMethod>(`${this.url}/${cartId}`);
  }

  update(cartId: DaffCart['id'], payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>> {
    return this.http.put<DaffCart>(`${this.url}/${cartId}`, payment);
  }

  remove(cartId: DaffCart['id']): Observable<void> {
    return this.http.delete<void>(`${this.url}/${cartId}`);
  }
}
