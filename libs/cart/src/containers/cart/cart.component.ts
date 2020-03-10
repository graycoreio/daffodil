import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromCart from '../../reducers';
import { DaffCartLoad, DaffAddToCart } from '../../actions/cart.actions';
import { DaffCart } from '../../models/cart';
import {
  selectCartLoading,
  selectCartValue
} from '../../selectors';
@Component({
  selector: '[cart-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'CartContainer'
})
export class DaffCartContainer implements OnInit {

  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;

  constructor(
    private store: Store<fromCart.DaffCartReducersState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new DaffCartLoad());

    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.cart$ = this.store.pipe(select(selectCartValue));
  }

  addToCart(payload) {
    this.store.dispatch(new DaffAddToCart(payload));
  }
}
