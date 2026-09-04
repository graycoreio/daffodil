import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffCategoryReducersState } from '../category-reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil category reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CATEGORY_REDUCERS,
  /**
   * Provider function for {@link DAFF_CATEGORY_REDUCERS}.
   */
  provider: provideDaffCategoryReducers,
  /**
   * Factory provider function for {@link DAFF_CATEGORY_REDUCERS}.
   */
  factoryProvider: provideDaffCategoryReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffCategoryReducersState>>(
  'DAFF_CATEGORY_REDUCERS',
);
