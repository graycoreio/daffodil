import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import { ShippingAddress } from '../models/shipping-address';
import * as fromShipping from '../reducers';
import { UpdateShipping } from '../actions/shipping.actions';

@Component({
  selector: '[shipping-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ShippingContainer'
})
export class ShippingContainer implements OnInit {
  
  shipping$: Observable<ShippingAddress>;

  constructor(
    private store: Store<fromShipping.State>
  ) { }

  ngOnInit() {
    this.shipping$ = this.store.pipe(
      select(fromShipping.selectShippingValueState)
    );
  }

  updateShipping(address: ShippingAddress) {
    this.store.dispatch(new UpdateShipping(address));
  }
}
