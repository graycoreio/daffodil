import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { Cart } from '@daffodil/core';
import * as fromCart from '../../reducers/index';
import { CartLoad } from '../../actions/cart.actions';

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

    this.loading$ = this.store.select(fromCart.selectCartLoadingState);
    this.cart$ = this.store.select(fromCart.selectCartValueState);
  }
}
