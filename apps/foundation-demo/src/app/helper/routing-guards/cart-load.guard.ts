import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { CanActivate } from '@angular/router';

import { Cart, CartLoad, fromCart } from '@daffodil/cart';

@Injectable()
export class CartLoadGuard implements CanActivate {
  constructor(private store: Store<fromCart.State>) {}

  /**
   * CanActivate will activate if a cart is defined
   * otherwise, it should timeout after 1s and return false.
   */
  canActivate(): Observable<boolean> {
    return this.getCart().pipe(
      map(cart => cart ? true : false)
    );
  }


  /**
   * This will either return a cart,
   * or if cart is null dispatch an action
   */
  private getCart(): Observable<Cart> {
    return this.store.select(fromCart.selectCartValueState).pipe(
      map(cart => {
        if(cart === null) {
          this.loadCart()
        }
        return cart;
      }),
      filter(cart => cart !== null),
      map(cart => {
        return cart;
      }),
      take(1)
    );
  }

  /**
   * Helper function CartLoad action
   */
  private loadCart() {
    this.store.dispatch(new CartLoad());
  }
}
