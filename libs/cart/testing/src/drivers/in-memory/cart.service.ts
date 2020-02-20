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

  get(id: number | string): Observable<DaffCart> {
    return this.http.get<DaffCart>(this.url);
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return this.http.post<DaffCart>(this.url + '/addToCart', { productId, qty });
  }

  clear(id: number | string): Observable<DaffCart> {
    return this.http.post<DaffCart>(this.url + '/clear', {});
  }

  create(): Observable<Partial<DaffCart>> {
    return this.http.post<Partial<DaffCart>>(this.url + '/create', {});
  }
}
