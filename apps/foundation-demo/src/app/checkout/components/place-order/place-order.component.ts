import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromFoundationCheckout from '../../reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit{

  enablePlaceOrderButton$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    this.enablePlaceOrderButton$ = this.store.pipe(
      select(fromFoundationCheckout.selectEnablePlaceOrderButton)
    );
  }

  placeOrder() {
    console.log('place order');
  }
}
