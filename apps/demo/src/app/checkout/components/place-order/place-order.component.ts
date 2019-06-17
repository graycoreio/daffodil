import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { fromCart, DaffCart } from '@daffodil/cart';
import { PlaceOrder } from '@daffodil/checkout';

import * as fromDemoCheckout from '../../reducers';

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit, OnDestroy {

  cart: DaffCart;
  cartSubscription: Subscription;
  enablePlaceOrderButton$: Observable<boolean>;
  
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
  
  constructor(
    private store: Store<fromCart.State>
  ) { }
    
  ngOnInit() {
    this.enablePlaceOrderButton$ = this.store.pipe(select(fromDemoCheckout.selectEnablePlaceOrderButton));
    this.cartSubscription = this.store.pipe(select(fromCart.selectCartValueState)).subscribe((cart) => {
      this.cart = cart;
    });
  }
  
  placeOrder() {
    this.store.dispatch(new PlaceOrder(this.cart));
  }
}
