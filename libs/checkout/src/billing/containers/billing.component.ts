import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

import * as fromBilling from '../reducers/index';
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import { PaymentInfo } from '../../models/payment/payment-info';

@Component({
  selector: '[billing-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BillingContainer'
})
export class BillingContainer implements OnInit {
  
  billingAddress$: Observable<DaffodilAddress>;
  billingAddressIsShippingAddress$: Observable<boolean>;
  paymentInfo$: Observable<PaymentInfo>;

  constructor(
    private store: Store<fromBilling.State>
  ) { }

  ngOnInit() {
    this.billingAddress$ = this.store.pipe(select(fromBilling.selectBillingAddressState));
    this.billingAddressIsShippingAddress$ = this.store.pipe(select(fromBilling.selectBillingAddressIsShippingAddressState));
    this.paymentInfo$ = this.store.pipe(select(fromBilling.selectPaymentInfoState));
  }

  updateBillingAddress(address: DaffodilAddress) {
    this.store.dispatch(new UpdateBillingAddress(address));
  }

  toggleBillingAddressIsShippingAddress() {
    this.store.dispatch(new ToggleBillingAddressIsShippingAddress());
  }

  updatePaymentInfo(info: PaymentInfo) {
    this.store.dispatch(new UpdatePaymentInfo(info));
  }
}
