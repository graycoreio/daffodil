import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsReducersState } from '../reducers/reducers-state.interface';
import { DAFF_REVIEWS_STORE_FEATURE_KEY } from '../reducers/store-feature-key';

/**
 * An interface for the entire product feature state.
 */
export interface DaffReviewsFeatureMemoizedSelector<T extends DaffProductReview = DaffProductReview> {
  selectReviewsState: MemoizedSelector<Record<string, any>, DaffReviewsReducersState<T>>;
}

/**
 * A function that returns a selector for the entire product feature state.
 */
export const getDaffReviewsFeatureSelector = (() => {
  let cache;
  return <T extends DaffProductReview = DaffProductReview>(): DaffReviewsFeatureMemoizedSelector<T> => cache = cache
    ? cache
    : { selectReviewsState: createFeatureSelector<DaffReviewsReducersState<T>>(DAFF_REVIEWS_STORE_FEATURE_KEY) };
})();
