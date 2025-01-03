import { MetaReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsReducersState } from '../reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra meta-reducers.
   *
   * Prefer using {@link daffReviewsProvideMetaReducers}.
   */
  token: DAFF_REVIEWS_META_REDUCERS,

  /**
   * Provides additional meta-reducers that run after the standard Daffodil cart meta-reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffReviewsProvideMetaReducers(
   *     myMetaReducer1,
   *     myMetaReducer2
   *   )
   * ]
   * ```
   */
  provider: daffReviewsProvideMetaReducers,
} = createMultiInjectionToken<MetaReducer<DaffReviewsReducersState>>('DAFF_REVIEWS_META_REDUCERS');
