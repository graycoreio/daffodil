import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCheckoutServiceInterface, Order } from '@daffodil/checkout';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCheckoutService implements DaffCheckoutServiceInterface {
  url = '/api/checkout';

  constructor(private http: HttpClient) {}

  placeOrder(cartId: string): Observable<Order> {
    return this.http.post<Order>(this.url + '/placeOrder', { cartId });
  }
}
