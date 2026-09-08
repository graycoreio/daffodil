import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffSearchReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil search reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_SEARCH_REDUCERS,
  /**
   * Provider function for {@link DAFF_SEARCH_REDUCERS}.
   */
  provider: provideDaffSearchReducers,
  /**
   * Factory provider function for {@link DAFF_SEARCH_REDUCERS}.
   */
  factoryProvider: provideDaffSearchReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffSearchReducersState>>(
  'DAFF_SEARCH_REDUCERS',
);
