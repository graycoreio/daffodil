import { createSelector } from '@ngrx/store';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffProductCollectionMemoizedSelectors,
  daffProductCollectionSelectorFactory,
} from '@daffodil/product/state';

import { DaffCategoryStateRootSlice } from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export type DaffCategoryPageProductCollectionSelectors = DaffProductCollectionMemoizedSelectors<DaffCategoryStateRootSlice, DaffCategoryPageMetadata>;

const {
  selectCategoryFeatureState,
} = getDaffCategoryFeatureSelector();

const selectCategoryProductCollectionState = createSelector(
  selectCategoryFeatureState,
  state => state.pageMetadata,
);

export const getCategoryProductCollectionSelectors = (() => {
  let cache;
  return (): DaffCategoryPageProductCollectionSelectors =>
    cache = cache || daffProductCollectionSelectorFactory<DaffCategoryStateRootSlice, DaffCategoryPageMetadata>(selectCategoryProductCollectionState);
})();
