import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCart,
  DaffCartItemInput,
  DaffCartItemServiceInterface,
  DaffCartItem
} from '@daffodil/cart';

import { DaffCartFactory, DaffCartItemFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartItemService implements DaffCartItemServiceInterface<
  DaffCartItem,
  DaffCartItemInput,
  DaffCart
> {
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

  delete(cartId: string, itemId: string): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }
}
