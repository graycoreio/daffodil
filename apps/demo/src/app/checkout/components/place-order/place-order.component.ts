import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { fromCart, Cart } from '@daffodil/cart';
import { PlaceOrder } from '@daffodil/checkout';

import * as fromDemoCheckout from '../../reducers';

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  cart$: Observable<Cart>;
  enablePlaceOrderButton$: Observable<boolean>;
  
  @HostListener('click', ['$event.target'])
  placeOrder() {
    this.cart$.subscribe((cart) => {
      this.store.dispatch(new PlaceOrder(cart));
    })
  }

  constructor(
    private store: Store<fromCart.State>
  ) { }

  ngOnInit() {
    this.enablePlaceOrderButton$ = this.store.pipe(select(fromDemoCheckout.selectEnablePlaceOrderButton));
    this.cart$ = this.store.pipe(select(fromCart.selectCartValueState));
  }
}
