import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffOrderReducersState } from '../order-reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil order reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_ORDER_REDUCERS,
  /**
   * Provider function for {@link DAFF_ORDER_REDUCERS}.
   */
  provider: provideDaffOrderReducers,
  /**
   * Factory provider function for {@link DAFF_ORDER_REDUCERS}.
   */
  factoryProvider: provideDaffOrderReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffOrderReducersState>>(
  ' DAFF_ORDER_REDUCERS',
);
