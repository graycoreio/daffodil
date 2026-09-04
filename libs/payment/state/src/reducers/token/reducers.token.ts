import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffPaymentReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil payment reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PAYMENT_REDUCERS,
  /**
   * Provider function for {@link DAFF_PAYMENT_REDUCERS}.
   */
  provider: provideDaffPaymentReducers,
  /**
   * Factory provider function for {@link DAFF_PAYMENT_REDUCERS}.
   */
  factoryProvider: provideDaffPaymentReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffPaymentReducersState>>(
  'DAFF_PAYMENT_REDUCERS',
);
