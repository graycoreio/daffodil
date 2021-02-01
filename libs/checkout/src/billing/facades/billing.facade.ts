import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAddress } from '@daffodil/core';
import { DaffStoreFacade } from '@daffodil/core/state';

import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffBillingModule } from '../billing.module';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';
import {
  selectBillingAddress,
  selectBillingAddressIsShippingAddress,
  selectPaymentInfo,
} from '../selectors/billing.selector';

/**
 * A facade for accessing state for the billing information of a customer
 */
@Injectable({
  providedIn: DaffBillingModule,
})
export class DaffBillingFacade implements DaffStoreFacade<Action> {
  /**
   * The billing address for a customer.
   */
  billingAddress$: Observable<DaffAddress>;
  /**
   * Whether or not the billing address is the same as the shipping address.
   */
  billingAddressIsShippingAddress$: Observable<boolean>;
  /**
   * The payment information for a customer.
   */
  paymentInfo$: Observable<PaymentInfo>;

  constructor(private store: Store<DaffBillingReducersState>) {
    this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
    this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
    this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
  }

  /**
   * Dispatches the given action.
   *
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
