import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffCart, DaffCartItem, DaffCartItemInput } from '@daffodil/cart';
import {
  DaffCartItemServiceInterface,
} from '@daffodil/cart/driver';

import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartItemService implements DaffCartItemServiceInterface {
  constructor(
    private cartItemFactory: DaffCartItemFactory,
    private cartFactory: DaffCartFactory
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartItem[]> {
    return of(this.cartItemFactory.createMany(3));
  }

  get(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<DaffCartItem> {
    return of(this.cartItemFactory.create());
  }

  add(cartId: DaffCart['id'], input: DaffCartItemInput): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  update(
    cartId: DaffCart['id'],
    itemId: DaffCartItem['item_id'],
    item: Partial<DaffCartItem>
  ): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  delete(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }
}
