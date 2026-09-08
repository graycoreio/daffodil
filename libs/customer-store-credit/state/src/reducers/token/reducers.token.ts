import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCustomerStoreCreditReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil customer reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CUSTOMER_STORE_CREDIT_REDUCERS,
  /**
   * Provider function for {@link DAFF_CUSTOMER_STORE_CREDIT_REDUCERS}.
   */
  provider: provideDaffCustomerStoreCreditReducers,
  /**
   * Factory provider function for {@link DAFF_CUSTOMER_STORE_CREDIT_REDUCERS}.
   */
  factoryProvider: provideDaffCustomerStoreCreditReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCustomerStoreCreditReducersState>>(
  'DAFF_CUSTOMER_STORE_CREDIT_REDUCERS',
);
