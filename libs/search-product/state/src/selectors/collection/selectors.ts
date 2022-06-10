import { createSelector } from '@ngrx/store';

import {
  DaffProductCollectionMemoizedSelectors,
  daffProductCollectionSelectorFactory,
} from '@daffodil/product/state';

import { DaffSearchProductStateRootSlice } from '../../reducers/public_api';
import { getDaffSearchProductReducersStateSelector } from '../search-feature.selector';

const {
  selectSearchProductFeatureState,
} = getDaffSearchProductReducersStateSelector();

const selectSearchProductCollectionState = createSelector(
  selectSearchProductFeatureState,
  state => state.productCollection,
);

export const getSearchProductCollectionSelectors = (() => {
  let cache;
  return (): DaffProductCollectionMemoizedSelectors<DaffSearchProductStateRootSlice> =>
    cache = cache || daffProductCollectionSelectorFactory<DaffSearchProductStateRootSlice>(selectSearchProductCollectionState);
})();
