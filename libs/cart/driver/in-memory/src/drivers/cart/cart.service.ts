import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
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
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartService extends DaffInMemoryDriverBase implements DaffCartServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_COLLECTION_NAME);
  }

  get(cartId: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return this.http.get<DaffCart>(`${this.url}/${cartId}`).pipe(
      catchError((error: Error) => throwError(() => new DaffCartNotFoundError(error.message))),
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

  merge(guestCart: DaffCart['id'], customerCart?: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return this.http.post<DaffCart>(`${this.url}/${guestCart}/merge`, {
      source: guestCart,
      destination: customerCart,
    }).pipe(
      catchError((error: Error) => throwError(() => new DaffCartNotFoundError(error.message))),
      map(result => ({
        response: result,
        errors: [],
      })),
    );
  }
}
