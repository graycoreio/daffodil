import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import { ShippingAddress } from '../models/shipping-address';
import * as fromShipping from '../reducers';
import { UpdateShippingInfo } from '../actions/shipping.actions';

@Component({
  selector: '[shipping-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ShippingContainer'
})
export class ShippingContainer implements OnInit {
  
  shippingInfo$: Observable<ShippingAddress>;

  constructor(
    private store: Store<fromShipping.State>
  ) { }

  ngOnInit() {
    this.shippingInfo$ = this.store.pipe(
      select(fromShipping.selectShippingInfoState)
    );
  }

  updateShippingInfo(address: ShippingAddress) {
    this.store.dispatch(new UpdateShippingInfo(address));
  }
}
