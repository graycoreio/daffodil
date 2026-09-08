import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCartStoreCreditReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil cart reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CART_STORE_CREDIT_REDUCERS,
  /**
   * Provider function for {@link DAFF_CART_STORE_CREDIT_REDUCERS}.
   */
  provider: provideDaffCartStoreCreditReducers,
  /**
   * Factory provider function for {@link DAFF_CART_STORE_CREDIT_REDUCERS}.
   */
  factoryProvider: provideDaffCartStoreCreditReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCartStoreCreditReducersState>>(
  'DAFF_CART_STORE_CREDIT_REDUCERS',
);
