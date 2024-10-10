import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCartItem,
  DaffCartItemInput,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartItemServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_ITEMS_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartItemService extends DaffInMemoryDriverBase implements DaffCartItemServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_ITEMS_COLLECTION_NAME);
  }

  list(cartId: DaffCart['id']): Observable<DaffCartItem[]> {
    return this.http.get<DaffCartItem[]>(`${this.url}/${cartId}/`);
  }

  get(cartId: DaffCart['id'], itemId: DaffCartItem['id']): Observable<DaffCartItem> {
    return this.http.get<DaffCartItem>(`${this.url}/${cartId}/${itemId}`);
  }

  add(cartId: DaffCart['id'], input: DaffCartItemInput): Observable<Partial<DaffCart>> {
    return this.http.post<Partial<DaffCart>>(`${this.url}/${cartId}/`, input);
  }

  update(
    cartId: DaffCart['id'],
    itemId: DaffCartItem['id'],
    item: Partial<DaffCartItem>,
  ): Observable<Partial<DaffCart>> {
    return this.http.put<Partial<DaffCart>>(`${this.url}/${cartId}/${itemId}`, item);
  }

  delete(cartId: DaffCart['id'], itemId: DaffCartItem['id']): Observable<Partial<DaffCart>> {
    return this.http.delete<Partial<DaffCart>>(`${this.url}/${cartId}/${itemId}`);
  }
}
