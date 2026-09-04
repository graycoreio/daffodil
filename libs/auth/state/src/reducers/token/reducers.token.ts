import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffAuthFeatureState } from '../auth-feature-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil auth reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_AUTH_REDUCERS,
  /**
   * Provider function for {@link DAFF_AUTH_REDUCERS}.
   */
  provider: provideDaffAuthReducers,
  /**
   * Factory provider function for {@link DAFF_AUTH_REDUCERS}.
   */
  factoryProvider: provideDaffAuthReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffAuthFeatureState>>(
  'DAFF_AUTH_REDUCERS',
);
