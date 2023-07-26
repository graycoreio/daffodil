import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffCustomerPayment } from '@daffodil/customer-payment';

import { daffCustomerPaymentEntitiesReducer } from '../payment-entities/public_api';
import { daffCustomerPaymentReducer } from '../payment/public_api';
import { DaffCustomerPaymentReducersState } from '../reducers.interface';
import { DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS } from './extra.token';

/**
 * An internal token to hold the Daffodil customer reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_CUSTOMER_PAYMENT_REDUCERS = new InjectionToken<ActionReducer<DaffCustomerPaymentReducersState>>(
  'DAFF_CUSTOMER_PAYMENT_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        payment: daffCustomerPaymentReducer,
        paymentEntities: daffCustomerPaymentEntitiesReducer,
      }),
      ...inject(DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS),
    ]),
  },
);
