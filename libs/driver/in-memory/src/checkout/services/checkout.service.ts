import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cart } from '@daffodil/core';

import { DaffCheckoutServiceInterface } from '@daffodil/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCheckoutService implements DaffCheckoutServiceInterface {
  url = '/api/checkout';

  constructor(private http: HttpClient) {}

  placeOrder(cartId: string): Observable<Cart> {
    return this.http.post<Cart>(this.url + '/placeOrder', { cartId });
  }
}
