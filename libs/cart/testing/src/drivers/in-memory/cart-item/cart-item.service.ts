import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartItemInput,
  DaffCartItemServiceInterface,
  DaffCartItem
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartItemService implements DaffCartItemServiceInterface<
  DaffCartItem,
  DaffCartItemInput,
  DaffCart
> {
  url = '/api/cart-items';

  constructor(private http: HttpClient) {}

  list(cartId: DaffCart['id']): Observable<DaffCartItem[]> {
    return this.http.get<DaffCartItem[]>(`${this.url}/${cartId}/`)
  }

  get(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<DaffCartItem> {
    return this.http.get<DaffCartItem>(`${this.url}/${cartId}/${itemId}`);
  }

  add(cartId: DaffCart['id'], input: DaffCartItemInput): Observable<Partial<DaffCart>> {
    return this.http.post<Partial<DaffCart>>(`${this.url}/${cartId}/`, input);
  }

  update(
    cartId: DaffCart['id'],
    itemId: DaffCartItem['item_id'],
    item: Partial<DaffCartItem>
  ): Observable<Partial<DaffCart>> {
    return this.http.put<Partial<DaffCart>>(`${this.url}/${cartId}/${itemId}`, item);
  }

  delete(cartId: string, itemId: string): Observable<Partial<DaffCart>> {
    return this.http.delete<Partial<DaffCart>>(`${this.url}/${cartId}/${itemId}`);
  }
}
