import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';

import { CartLoadGuard } from './cart-load.guard';
import { fromCart } from '@daffodil/state';
import { Store } from '@ngrx/store';
import { Cart } from '@daffodil/core';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(
    private store: Store<fromCart.State>,
    private router: Router,
    private cartLoadGuard: CartLoadGuard) {}

  canActivate(): Observable<boolean> {
    return this.cartLoadGuard.canActivate().pipe(
      switchMap(() => this.getCart()),
      map((cart) => this.isCartNotEmpty(cart))
    );
  }

  isCartNotEmpty(cart): boolean {
    if(cart.items.length === 0) {
      this.navigateToCart();
    }
    return cart.items.length !== 0;
  }

  /**
   * This will either return a cart,
   * or if cart is null dispatch an action
   */
  private getCart(): Observable<Cart> {
    return this.store.select(fromCart.selectCartValueState).pipe(
      take(1)
    );
  }

  private navigateToCart() {
    this.router.navigateByUrl('/cart');
  }
}
