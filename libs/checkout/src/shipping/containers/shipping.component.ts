import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { DaffUpdateShippingAddress, DaffSelectShippingOption } from '../actions/shipping.actions';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
import { selectShippingAddress, selectShippingOptionId, selectIsShippingAddressValid } from '../selectors/shipping.selectors';

@Component({
  selector: '[shipping-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'ShippingContainer'
})
export class ShippingContainer implements OnInit {
  
  shippingAddress$: Observable<DaffAddress>;
  selectedShippingOptionId$: Observable<string>;
  isShippingAddressValid$: Observable<boolean>;
  isShippingOptionSelected$: Observable<boolean>;

  constructor(
    private store: Store<DaffShippingReducersState>
  ) { }

  ngOnInit() {
    this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
    this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
    this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
  }

  updateShippingAddress(address: DaffAddress) {
    this.store.dispatch(new DaffUpdateShippingAddress(address));
  }

  selectShippingOption(optionId: string) {
    this.store.dispatch(new DaffSelectShippingOption(optionId));
  }
}
