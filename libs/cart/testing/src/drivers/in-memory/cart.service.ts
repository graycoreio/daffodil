import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cart, DaffCartServiceInterface } from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartService implements DaffCartServiceInterface {
  url = '/api/cart';

  constructor(private http: HttpClient) {}

  get(): Observable<Cart> {
    return this.http.get<Cart>(this.url);
  }

  addToCart(productId: string, qty: number): Observable<Cart> {
    return this.http.post<Cart>(this.url + '/addToCart', { productId, qty });
  }

  clear(): Observable<void> {
    return this.http.post<void>(this.url + '/clear', {});
  }
}
