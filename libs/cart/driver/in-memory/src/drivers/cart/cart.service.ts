import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
} from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartNotFoundError,
} from '@daffodil/cart/driver';
import { DaffDriverResponse } from '@daffodil/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartService implements DaffCartServiceInterface {
  /**
   * The URL with which the driver makes calls to the backend.
   */
  readonly url = '/api/cart';

  constructor(private http: HttpClient) {}

  get(cartId: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return this.http.get<DaffCart>(`${this.url}/${cartId}`).pipe(
      catchError((error: Error) => throwError(new DaffCartNotFoundError(error.message))),
      map(result => ({
        response: result,
        errors: [],
      })),
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
