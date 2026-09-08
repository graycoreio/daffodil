import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

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
  /**
   * Factory provider function for {@link DAFF_CUSTOMER_PAYMENT_REDUCERS}.
   */
  factoryProvider: provideDaffCustomerPaymentReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCustomerPaymentReducersState>>(
  'DAFF_CUSTOMER_PAYMENT_REDUCERS',
);
