import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffReviewsReducersState } from '../reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil cart reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_REVIEWS_REDUCERS,
  /**
   * Provider function for {@link DAFF_REVIEWS_REDUCERS}.
   */
  provider: provideDaffReviewsReducers,
  /**
   * Factory provider function for {@link DAFF_REVIEWS_REDUCERS}.
   */
  factoryProvider: provideDaffReviewsReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffReviewsReducersState>>(
  'DAFF_REVIEWS_REDUCERS',
);
