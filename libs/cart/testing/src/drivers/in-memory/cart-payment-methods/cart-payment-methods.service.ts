import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffCartPaymentMethodsServiceInterface,
  DaffCartPaymentMethod,
  DaffCart
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod> {
  url = '/api/cart-payment-methods';

  constructor(private http: HttpClient) {}

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return this.http.get<DaffCartPaymentMethod[]>(`${this.url}/${cartId}`)
  }
}
