import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Cart } from '@daffodil/core';

import * as fromFoundationCheckout from '../../reducers';
import { PlaceOrder } from '../../actions/checkout.actions';

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit{

  enablePlaceOrderButton$: Observable<boolean>;
  @Input() cart: Cart;

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    this.enablePlaceOrderButton$ = this.store.pipe(select(fromFoundationCheckout.selectEnablePlaceOrderButton));
  }

  placeOrder() {
    this.store.dispatch(new PlaceOrder());
  }
}
