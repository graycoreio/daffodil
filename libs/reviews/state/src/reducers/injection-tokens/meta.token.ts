import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { MetaReducer } from '@ngrx/store';

import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsReducersState } from '../reducers-state.interface';


/**
 * A token to hold the injectable extra meta-reducers.
 *
 * Prefer using {@link daffReviewsProvideMetaReducers}.
 */
export const DAFF_REVIEWS_META_REDUCERS = new InjectionToken<MetaReducer<DaffReviewsReducersState>[]>(
  'DAFF_REVIEWS_META_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional meta-reducers that run after the standard Daffodil cart meta-reducers.
 *
 * ```ts
 * providers: [
 *   ...daffReviewsProvideMetaReducers(
 *     myMetaReducer1,
 *     myMetaReducer2
 *   )
 * ]
 * ```
 */
export function daffReviewsProvideMetaReducers<T extends DaffProductReview = DaffProductReview>(
  ...metaReducers: MetaReducer<DaffReviewsReducersState<T>>[]
): Provider[] {
  return metaReducers.map(metaReducer => ({
    provide: DAFF_REVIEWS_META_REDUCERS,
    useValue: metaReducer,
    multi: true,
  }));
}
