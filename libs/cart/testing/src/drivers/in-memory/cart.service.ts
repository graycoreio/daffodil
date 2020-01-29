import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCart, DaffCartServiceInterface } from '@daffodil/cart';
import { mergeMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartService implements DaffCartServiceInterface<DaffCart> {
  url = '/api/cart';

  constructor(private http: HttpClient) {}

  get(): Observable<DaffCart> {
    return this.http.get<DaffCart>(this.url);
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return this.http.post<DaffCart>(this.url + '/addToCart', { productId, qty });
  }

  clear(): Observable<DaffCart> {
    return this.http.post<void>(this.url + '/clear', {}).pipe(
      mergeMapTo(this.get())
    );
  }
}
