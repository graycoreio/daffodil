import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_REVIEWS_EXTRA_REDUCERS } from './extra.token';
import { daffReviewsReducers } from '../reducers';
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
} = createSingleInjectionToken<ActionReducer<DaffReviewsReducersState>>(
  'DAFF_REVIEWS_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffReviewsReducers),
      ...inject(DAFF_REVIEWS_EXTRA_REDUCERS),
    ]),
  },
);
