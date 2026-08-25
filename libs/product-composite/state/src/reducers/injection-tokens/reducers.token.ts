import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCompositeProductReducersState } from '../composite-product-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil composite product reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PRODUCT_COMPOSITE_REDUCERS,
  /**
   * Provider function for {@link DAFF_PRODUCT_COMPOSITE_REDUCERS}.
   */
  provider: provideDaffProductCompositeReducers,
  /**
   * Factory provider function for {@link DAFF_PRODUCT_COMPOSITE_REDUCERS}.
   */
  factoryProvider: provideDaffProductCompositeReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCompositeProductReducersState>>(
  'DAFF_PRODUCT_COMPOSITE_REDUCERS',
);
