import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProductReview } from '@daffodil/reviews';

import { daffReviewsReducers } from '../reducers';
import { DaffReviewsReducersState } from '../reducers-state.interface';
import { DAFF_REVIEWS_EXTRA_REDUCERS } from './extra.token';

/**
 * An internal token to hold the Daffodil cart reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_REVIEWS_REDUCERS = new InjectionToken<ActionReducer<DaffReviewsReducersState>>(
  'DAFF_REVIEWS_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffReviewsReducers),
      ...inject(DAFF_REVIEWS_EXTRA_REDUCERS),
    ]),
  },
);
