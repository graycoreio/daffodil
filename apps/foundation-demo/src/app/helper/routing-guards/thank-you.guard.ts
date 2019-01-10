import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Router, CanActivate } from '@angular/router';

import { Cart } from '@daffodil/core';
import { fromCart } from '@daffodil/state';

@Injectable()
export class ThankYouGuard implements CanActivate {
  constructor(
    private store: Store<fromCart.State>,
    private router: Router
  ) {}

  canActivate(param): Observable<boolean> {
    return this.getCart().pipe(
      map(cart => {
        if(!this.isCartId(cart, param.params.id)) {
          this.router.navigateByUrl('/404');
        }

        return this.isCartId(cart, param.params.id);
      })
    );
  }

  getCart(): Observable<Cart> {
    return this.store.pipe(
      select(fromCart.selectCartValueState),
      map(cart => {
        return cart;
      }),
      take(1)
    );
  }

  private isCartId(cart: Cart, id: string): boolean {
    return cart ? cart.id.toString() === id : false;
  }
}
