import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffConfigurableProductReducersState } from '../configurable-product-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil configurable product reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PRODUCT_CONFIGURABLE_REDUCERS,
  /**
   * Provider function for {@link DAFF_PRODUCT_CONFIGURABLE_REDUCERS}.
   */
  provider: provideDaffProductConfigurableReducers,
  /**
   * Factory provider function for {@link DAFF_PRODUCT_CONFIGURABLE_REDUCERS}.
   */
  factoryProvider: provideDaffProductConfigurableReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffConfigurableProductReducersState>>(
  'DAFF_PRODUCT_CONFIGURABLE_REDUCERS',
);
