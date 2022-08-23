import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsReducersState } from '../reducers-state.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffReviewsProvideExtraReducers}.
 */
export const DAFF_REVIEWS_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffReviewsReducersState>[]>(
  'DAFF_REVIEWS_EXTRA_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffReviewsProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffReviewsProvideExtraReducers<T extends DaffProductReview = DaffProductReview>(
  ...reducers: ActionReducer<Partial<DaffReviewsReducersState<T>>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_REVIEWS_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
