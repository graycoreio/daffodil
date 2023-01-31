import { createSelector } from '@ngrx/store';

import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';
import { DaffOrderCollection } from '@daffodil/order';

import { DaffOrderStateRootSlice } from '../../reducers/public_api';
import { getDaffOrderReducersStateSelector } from '../order-feature.selector';

export type DaffOrderCollectionMemoizedSelectors = DaffCollectionMemoizedSelectors<DaffOrderStateRootSlice, DaffOrderCollection['metadata']>;

const {
  selectOrderFeatureState,
} = getDaffOrderReducersStateSelector();

const selectProductReviewsCollectionState = createSelector(
  selectOrderFeatureState,
  state => state.collection,
);

export const getDaffOrderCollectionSelectors = (() => {
  let cache;
  return (): DaffOrderCollectionMemoizedSelectors =>
    cache = cache || daffCollectionSelectorFactory<DaffOrderStateRootSlice, DaffOrderCollection['metadata']>(selectProductReviewsCollectionState);
})();
