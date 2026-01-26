import {
  createSelector,
  defaultMemoize,
} from '@ngrx/store';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';

import { DaffCategoryStateRootSlice } from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export type DaffCategoryPageProductCollectionSelectors = DaffCollectionMemoizedSelectors<DaffCategoryStateRootSlice, DaffCategoryPageMetadata>;

const {
  selectCategoryFeatureState,
} = getDaffCategoryFeatureSelector();

const selectCategoryProductCollectionState = createSelector(
  selectCategoryFeatureState,
  state => state.pageMetadata,
);

export const getCategoryProductCollectionSelectors: () => DaffCategoryPageProductCollectionSelectors = defaultMemoize(() => daffCollectionSelectorFactory<DaffCategoryStateRootSlice, DaffCategoryPageMetadata>(selectCategoryProductCollectionState)).memoized;
