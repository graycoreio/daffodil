import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { DaffCart, DaffCartServiceInterface, DaffCartNotFoundError } from '@daffodil/cart';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartService implements DaffCartServiceInterface<DaffCart> {
  url = '/api/cart';

  constructor(private http: HttpClient) {}

  get(cartId: DaffCart['id']): Observable<DaffCart> {
    return this.http.get<DaffCart>(`${this.url}/${cartId}`).pipe(
			catchError((error: Error) => throwError(DaffCartNotFoundError)),
			map(result => result)
		);
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return this.http.post<DaffCart>(this.url + '/addToCart', { productId, qty });
  }

  clear(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.http.post<Partial<DaffCart>>(`${this.url}/${cartId}/clear`, {});
  }

  create(): Observable<{id: DaffCart['id']}> {
    return this.http.post<{id: DaffCart['id']}>(this.url, {});
  }
}
