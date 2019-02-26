import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

import * as fromShipping from '../reducers/index';
import { UpdateShippingAddress, SelectShippingOption } from '../actions/shipping.actions';

@Component({
  selector: '[shipping-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ShippingContainer'
})
export class ShippingContainer implements OnInit {
  
  shippingAddress$: Observable<DaffodilAddress>;
  selectedShippingOptionId$: Observable<string>;
  isShippingAddressValid$: Observable<boolean>;
  isShippingOptionSelected$: Observable<boolean>;

  constructor(
    private store: Store<fromShipping.State>
  ) { }

  ngOnInit() {
    this.shippingAddress$ = this.store.pipe(select(fromShipping.selectShippingAddressState));
    this.selectedShippingOptionId$ = this.store.pipe(select(fromShipping.selectShippingOptionState));
    this.isShippingAddressValid$ = this.store.pipe(select(fromShipping.selectIsShippingAddressValid));
  }

  updateShippingAddress(address: DaffodilAddress) {
    this.store.dispatch(new UpdateShippingAddress(address));
  }

  selectShippingOption(optionId: string) {
    this.store.dispatch(new SelectShippingOption(optionId));
  }
}
