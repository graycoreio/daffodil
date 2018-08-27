import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Cart } from '@daffodil/core';

import { DaffCartServiceInterface } from '@daffodil/driver';

@Injectable()
export class DaffInMemoryCartService implements DaffCartServiceInterface {
  url = '/api/cart';

  constructor(private http: HttpClient) {}

  get(): Observable<Cart> {
    return this.http.get<Cart>(this.url);
  }

  addToCart(productId: string, qty: number): Observable<Cart> {
    return this.http.post<Cart>(this.url + '/addToCart', { productId, qty });
  }
}
