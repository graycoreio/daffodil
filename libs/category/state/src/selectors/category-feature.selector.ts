import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageConfigurationState,
} from '@daffodil/category';

import {
  DaffCategoryReducersState,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
} from '../reducers/public_api';


export interface DaffCategoryFeatureMemoizedSelectors<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>
> {
	selectCategoryFeatureState: MemoizedSelector<Record<string, any>, DaffCategoryReducersState<T, V, U>>;
}

export const getDaffCategoryFeatureSelector = (() => {
  let cache;
  return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryFeatureMemoizedSelectors<T, V, U> => cache = cache
    ? cache
    : { selectCategoryFeatureState: createFeatureSelector<DaffCategoryReducersState<T, V, U>>(DAFF_CATEGORY_STORE_FEATURE_KEY) };
})();
