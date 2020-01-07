import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { DaffUpdateBillingAddress, DaffUpdatePaymentInfo, DaffToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import { PaymentInfo } from '../../models/payment/payment-info';
import { selectBillingAddress, selectBillingAddressIsShippingAddress, selectPaymentInfo } from '../selectors/billing.selector';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';

@Component({
  selector: '[billing-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BillingContainer'
})
export class BillingContainer implements OnInit {
  
  billingAddress$: Observable<DaffAddress>;
  billingAddressIsShippingAddress$: Observable<boolean>;
  paymentInfo$: Observable<PaymentInfo>;

  constructor(
    private store: Store<DaffBillingReducersState>
  ) { }

  ngOnInit() {
    this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
    this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
    this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
  }

  updateBillingAddress(address: DaffAddress) {
    this.store.dispatch(new DaffUpdateBillingAddress(address));
  }

  toggleBillingAddressIsShippingAddress() {
    this.store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
  }

  updatePaymentInfo(info: PaymentInfo) {
    this.store.dispatch(new DaffUpdatePaymentInfo(info));
  }
}
