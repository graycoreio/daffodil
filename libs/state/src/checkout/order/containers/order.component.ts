import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Order } from '@daffodil/core';

import * as fromOrder from '../reducers/index';
import { PlaceOrder } from '../actions/order.actions';

@Component({
  selector: '[order-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'OrderContainer'
})
export class OrderContainer implements OnInit {
  
  order$: Observable<Order>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<fromOrder.State>
  ) { }

  ngOnInit() {
    this.order$ = this.store.pipe(select(fromOrder.selectOrderValueState));
    this.loading$ = this.store.pipe(select(fromOrder.selectLoadingState));
  }

  placeOrder(cart: Order) {
    this.store.dispatch(new PlaceOrder(cart));
  }
}
