import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';
import { DaffProductReviews } from '@daffodil/reviews';

import { DaffReviewsStateRootSlice } from '../../reducers/public_api';
import { getDaffReviewsFeatureSelector } from '../feature.selector';

export interface DaffProductReviewsCollectionMemoizedSelectors extends DaffCollectionMemoizedSelectors<DaffReviewsStateRootSlice, DaffProductReviews['metadata']> {
  selectSelectedFilter: MemoizedSelector<DaffReviewsStateRootSlice, DaffProductReviews['metadata']['filter']>;
};

const {
  selectReviewsState,
} = getDaffReviewsFeatureSelector();

const selectProductReviewsCollectionState = createSelector(
  selectReviewsState,
  state => state.productReviewsCollection,
);

const selectSelectedFilter = createSelector(
  selectProductReviewsCollectionState,
  metadata => metadata.filter,
);

export const getDaffProductReviewsCollectionSelectors = (() => {
  let cache;
  return (): DaffProductReviewsCollectionMemoizedSelectors =>
    cache = cache || {
      ...daffCollectionSelectorFactory<DaffReviewsStateRootSlice, DaffProductReviews['metadata']>(selectProductReviewsCollectionState),
      selectSelectedFilter,
    };
})();
