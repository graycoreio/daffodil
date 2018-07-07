import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import { ShippingAddress } from '../models/shipping-address';
import * as fromShipping from '../reducers';
import { UpdateShippingInfo, UpdateShippingOption } from '../actions/shipping.actions';

@Component({
  selector: '[shipping-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ShippingContainer'
})
export class ShippingContainer implements OnInit {
  
  shippingInfo$: Observable<ShippingAddress>;
  shippingOption$: Observable<string>;
  isShippingInfoValid$: Observable<Boolean>;

  constructor(
    private store: Store<fromShipping.State>
  ) { }

  ngOnInit() {
    this.shippingInfo$ = this.store.pipe(
      select(fromShipping.selectShippingInfoState)
    );
    this.shippingOption$ = this.store.pipe(
      select(fromShipping.selectShippingOptionState)
    );
    this.isShippingInfoValid$ = this.store.pipe(
      select(fromShipping.selectIsShippingInfoValid)
    );
  }

  updateShippingInfo(address: ShippingAddress) {
    this.store.dispatch(new UpdateShippingInfo(address));
  }

  updateShippingOption(option: string) {
    this.store.dispatch(new UpdateShippingOption(option));
  }
}
