import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DaffCart, DaffCartServiceInterface } from '@daffodil/cart';
import { mergeMapTo } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartService implements DaffCartServiceInterface<DaffCart> {
  url = '/api/cart';

  constructor(private http: HttpClient) { }

  get(cartId: DaffCart['id']): Observable<DaffCart> {
    return this.http.get<DaffCart>(`${this.url}/${cartId}`);
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return this.http.post<DaffCart>(this.url + '/addToCart', { productId, qty });
  }

  clear(cartId: DaffCart['id']): Observable<void> {
    return this.http.post<void>(this.url + '/clear', {cartId});
  }

  create(): Observable<{id: DaffCart['id']}> {
    return this.http.post<{id: DaffCart['id']}>(this.url, {});
  }
}
