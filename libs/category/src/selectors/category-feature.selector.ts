import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCategory } from '../models/category';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';

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
    : { selectCategoryFeatureState: createFeatureSelector<DaffCategoryReducersState<T, V, U>>('category') };
})();
