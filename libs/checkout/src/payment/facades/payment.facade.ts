import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';

import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffPaymentModule } from '../payment.module';
import { DaffPaymentReducersState } from '../reducers/payment-reducers.interface';
import { selectPaymentInfo } from '../selectors/payment.selector';

/**
 * A facade for accessing state for customer payment information.
 */
@Injectable({
  providedIn: DaffPaymentModule,
})
export class DaffPaymentFacade implements DaffStoreFacade<Action> {
  /**
   * The payment information for a customer.
   */
  paymentInfo$: Observable<PaymentInfo>;

  constructor(private store: Store<DaffPaymentReducersState>) {
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
