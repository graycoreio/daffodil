import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffCustomerPayment } from '@daffodil/customer-payment';

import { DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS } from './extra.token';
import { daffCustomerPaymentReducer } from '../payment/public_api';
import { daffCustomerPaymentEntitiesReducer } from '../payment-entities/public_api';
import { DaffCustomerPaymentReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil customer reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CUSTOMER_PAYMENT_REDUCERS,
  /**
   * Provider function for {@link DAFF_CUSTOMER_PAYMENT_REDUCERS}.
   */
  provider: provideDaffCustomerPaymentReducers,
} = createSingleInjectionToken<ActionReducer<DaffCustomerPaymentReducersState>>(
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
