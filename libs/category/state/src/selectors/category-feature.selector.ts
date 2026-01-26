import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';

import {
  DaffCategoryReducersState,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryStateRootSlice,
} from '../reducers/public_api';

/**
 * An interface for the entire category feature state.
 */
export interface DaffCategoryFeatureMemoizedSelectors<
  V extends DaffGenericCategory<V> = DaffCategory,
> {
  selectCategoryFeatureState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducersState<V>>;
}

/**
 * A function that returns a selector for the entire category feature state.
 */
export const getDaffCategoryFeatureSelector: <V extends DaffGenericCategory<V>>() => DaffCategoryFeatureMemoizedSelectors<V> = defaultMemoize(<V extends DaffGenericCategory<V>>() => ({ selectCategoryFeatureState: createFeatureSelector<DaffCategoryStateRootSlice<V>,DaffCategoryReducersState<V>>(DAFF_CATEGORY_STORE_FEATURE_KEY) })).memoized;
