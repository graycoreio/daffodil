import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { fromCart, DaffCart } from '@daffodil/cart';
import { PlaceOrder } from '@daffodil/checkout';

import * as fromDemoCheckout from '../../reducers';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  enablePlaceOrderButton$: Observable<boolean>;
  cart$: Observable<DaffCart>;

  constructor(private store: Store<fromCart.State>) { }

  ngOnInit() {
    this.enablePlaceOrderButton$ = this.store.pipe(select(fromDemoCheckout.selectEnablePlaceOrderButton));
    this.cart$ = this.store.pipe(select(fromCart.selectCartValue));
  }

  placeOrder() {
    this.cart$.pipe(take(1)).subscribe((cart: DaffCart) => {
      this.store.dispatch(new PlaceOrder(cart));
    });
  }
}
