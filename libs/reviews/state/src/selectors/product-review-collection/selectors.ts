import { createSelector } from '@ngrx/store';

import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';
import { DaffProductReviews } from '@daffodil/reviews';

import { DaffReviewsStateRootSlice } from '../../reducers/public_api';
import { getDaffReviewsFeatureSelector } from '../feature.selector';

export type DaffProductReviewsCollectionMemoizedSelectors = DaffCollectionMemoizedSelectors<DaffReviewsStateRootSlice, DaffProductReviews['metadata']>;

const {
  selectReviewsState,
} = getDaffReviewsFeatureSelector();

const selectProductReviewsCollectionState = createSelector(
  selectReviewsState,
  state => state.productReviewsCollection,
);

export const getDaffProductReviewsCollectionSelectors = (() => {
  let cache;
  return (): DaffProductReviewsCollectionMemoizedSelectors =>
    cache = cache || daffCollectionSelectorFactory<DaffReviewsStateRootSlice, DaffProductReviews['metadata']>(selectProductReviewsCollectionState);
})();
