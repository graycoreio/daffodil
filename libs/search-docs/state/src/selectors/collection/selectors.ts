import { createSelector } from '@ngrx/store';

import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';

import { DaffSearchDocsStateRootSlice } from '../../reducers/public_api';
import { getDaffSearchDocsReducersStateSelector } from '../search-feature.selector';

const {
  selectSearchDocsFeatureState,
} = getDaffSearchDocsReducersStateSelector();

const selectSearchDocsCollectionState = createSelector(
  selectSearchDocsFeatureState,
  state => state.docsCollection,
);

export const getSearchDocsCollectionSelectors = (() => {
  let cache: any;
  return (): DaffCollectionMemoizedSelectors<DaffSearchDocsStateRootSlice> =>
    cache = cache || daffCollectionSelectorFactory<DaffSearchDocsStateRootSlice>(selectSearchDocsCollectionState);
})();
