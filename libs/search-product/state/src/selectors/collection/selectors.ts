import {
  createSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';

import { DaffSearchProductStateRootSlice } from '../../reducers/public_api';
import { getDaffSearchProductReducersStateSelector } from '../search-feature.selector';

const {
  selectSearchProductFeatureState,
} = getDaffSearchProductReducersStateSelector();

const selectSearchProductCollectionState = createSelector(
  selectSearchProductFeatureState,
  state => state.productCollection,
);

export const getSearchProductCollectionSelectors: () => DaffCollectionMemoizedSelectors<DaffSearchProductStateRootSlice> = defaultMemoize(() => daffCollectionSelectorFactory<DaffSearchProductStateRootSlice>(selectSearchProductCollectionState)).memoized;
