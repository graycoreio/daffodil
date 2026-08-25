import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCustomerReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil customer reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CUSTOMER_REDUCERS,
  /**
   * Provider function for {@link DAFF_CUSTOMER_REDUCERS}.
   */
  provider: provideDaffCustomerReducers,
  /**
   * Factory provider function for {@link DAFF_CUSTOMER_REDUCERS}.
   */
  factoryProvider: provideDaffCustomerReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCustomerReducersState>>(
  'DAFF_CUSTOMER_REDUCERS',
);
