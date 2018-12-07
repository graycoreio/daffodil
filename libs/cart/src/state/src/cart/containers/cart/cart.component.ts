import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { Cart } from '@daffodil/core';
import * as fromCart from '../../reducers/index';
import { CartLoad, AddToCart } from '../../actions/cart.actions';

@Component({
  selector: '[cart-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'CartContainer'
})
export class CartContainer implements OnInit {

  loading$: Observable<boolean>;
  cart$: Observable<Cart>;

  constructor(
    private store: Store<fromCart.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new CartLoad());

    this.loading$ = this.store.pipe(select(fromCart.selectCartLoadingState));
    this.cart$ = this.store.pipe(select(fromCart.selectCartValueState));
  }

  addToCart(payload) {
    this.store.dispatch(new AddToCart(payload));
  }
}
