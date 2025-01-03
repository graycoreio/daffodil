import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsReducersState } from '../reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffReviewsProvideExtraReducers}.
   */
  token: DAFF_REVIEWS_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffReviewsProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffReviewsProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffReviewsReducersState>>('DAFF_REVIEWS_EXTRA_REDUCERS');
