import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromCart from '../../reducers/index';
import { DaffCartLoad, DaffAddToCart } from '../../actions/cart.actions';
import { DaffCart } from '../../models/cart';

@Component({
  selector: '[cart-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'CartContainer'
})
export class DaffCartContainer implements OnInit {

  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;

  constructor(
    private store: Store<fromCart.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffCartLoad());

    this.loading$ = this.store.pipe(select(fromCart.selectCartLoadingState));
    this.cart$ = this.store.pipe(select(fromCart.selectCartValueState));
  }

  addToCart(payload) {
    this.store.dispatch(new DaffAddToCart(payload));
  }
}
