import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCartReducersState } from '../cart-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil cart reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CART_REDUCERS,
  /**
   * Provider function for {@link DAFF_CART_REDUCERS}.
   */
  provider: provideDaffCartReducers,
  /**
   * Factory provider function for {@link DAFF_CART_REDUCERS}.
   */
  factoryProvider: provideDaffCartReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCartReducersState>>(
  'DAFF_CART_REDUCERS',
);
