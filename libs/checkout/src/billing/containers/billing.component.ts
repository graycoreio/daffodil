import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

import * as fromBilling from '../reducers/index';
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import { PaymentInfo } from '../../models/payment/payment-info';

/** 
 * A component for attaching billing data to an application view. 
 * */
@Component({
  selector: '[billing-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'BillingContainer'
})
export class BillingContainer implements OnInit {
  
  /** 
   * An Observable of the billing address. 
   * */
  billingAddress$: Observable<DaffodilAddress>;

  /** 
   * An Observable boolean of whether the billing address and shipping address are the same. 
   * */
  billingAddressIsShippingAddress$: Observable<boolean>;

  /**
   * An Observable of the card payment info.
   */
  paymentInfo$: Observable<PaymentInfo>;

  /** An Observable of the card payment info.
   * @param store Billing redux store. 
   * */
  constructor(
    private store: Store<fromBilling.State>
  ) { }

  /**
   * Angular lifecycle method.
   */
  ngOnInit() {
    this.billingAddress$ = this.store.pipe(select(fromBilling.selectBillingAddressState));
    this.billingAddressIsShippingAddress$ = this.store.pipe(select(fromBilling.selectBillingAddressIsShippingAddressState));
    this.paymentInfo$ = this.store.pipe(select(fromBilling.selectPaymentInfoState));
  }

  /**
   * Dispatches action to update the billing address.
   * @param address A DaffodilAddress object
   */
  updateBillingAddress(address: DaffodilAddress) {
    this.store.dispatch(new UpdateBillingAddress(address));
  }

  /**
   * Toggles billingAddressIsShippingAddress boolean.
   */
  toggleBillingAddressIsShippingAddress() {
    this.store.dispatch(new ToggleBillingAddressIsShippingAddress());
  }

  /**
   * Dispatches action to update the payment info.
   * @param info A PaymentInfo object
   */
  updatePaymentInfo(info: PaymentInfo) {
    this.store.dispatch(new UpdatePaymentInfo(info));
  }
}
