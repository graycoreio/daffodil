import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { fromCart } from '@daffodil/state';

import { CartLoad } from '@daffodil/state';
import { Cart } from '@daffodil/core';
import { CanActivate } from '@angular/router';

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
    return this.store.pipe(
      select(fromCart.selectCartValueState),
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
