import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCheckoutServiceInterface } from '@daffodil/checkout';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCheckoutService implements DaffCheckoutServiceInterface {
  url = '/api/checkout';

  constructor(private http: HttpClient) {}

  placeOrder(cartId: string): Observable<DaffCart> {
    return this.http.post<DaffCart>(this.url + '/placeOrder', { cartId });
  }
}
