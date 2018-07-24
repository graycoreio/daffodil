import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import { ShippingAddress } from '@daffodil/core';
import * as fromShipping from '../reducers';
import { UpdateShippingInfo, SelectShippingOption } from '../actions/shipping.actions';

@Component({
  selector: '[shipping-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ShippingContainer'
})
export class ShippingContainer implements OnInit {
  
  shippingInfo$: Observable<ShippingAddress>;
  selectedShippingOption$: Observable<string>;
  isShippingInfoValid$: Observable<Boolean>;
  isShippingOptionSelected$: Observable<Boolean>;

  constructor(
    private store: Store<fromShipping.State>
  ) { }

  ngOnInit() {
    this.shippingInfo$ = this.store.pipe(
      select(fromShipping.selectShippingInfoState)
    );
    this.selectedShippingOption$ = this.store.pipe(
      select(fromShipping.selectShippingOptionState)
    );
    this.isShippingInfoValid$ = this.store.pipe(
      select(fromShipping.selectIsShippingInfoValid)
    );
  }

  updateShippingInfo(address: ShippingAddress) {
    this.store.dispatch(new UpdateShippingInfo(address));
  }

  selectShippingOption(option: string) {
    this.store.dispatch(new SelectShippingOption(option));
  }
}
