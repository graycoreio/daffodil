import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffProductReducersState } from '../product-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil cart reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PRODUCT_REDUCERS,
  /**
   * Provider function for {@link DAFF_PRODUCT_REDUCERS}.
   */
  provider: provideDaffProductReducers,
  /**
   * Factory provider function for {@link DAFF_PRODUCT_REDUCERS}.
   */
  factoryProvider: provideDaffProductReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffProductReducersState>>(
  'DAFF_PRODUCT_REDUCERS',
);
