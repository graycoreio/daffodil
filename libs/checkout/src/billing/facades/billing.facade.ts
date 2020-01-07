import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade, DaffAddress } from '@daffodil/core';

import { DaffBillingModule } from '../billing.module';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';
import { 
  selectBillingAddress, 
  selectBillingAddressIsShippingAddress, 
  selectPaymentInfo 
} from '../selectors/billing.selector';
import { PaymentInfo } from '../../models/payment/payment-info';

/**
 * A facade for accessing state for the billing information of a customer
 */
@Injectable({
  providedIn: DaffBillingModule
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
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
