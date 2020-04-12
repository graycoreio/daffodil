import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';

export interface DaffCategoryFeatureMemoizedSelectors<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>> {
	selectCategoryFeatureState: MemoizedSelector<object, DaffCategoryReducersState<T, V, U>>;
}

export const getDaffCategoryFeatureSelector = (() => {
	let cache;
	return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryFeatureMemoizedSelectors<T, V, U> => cache = cache 
		? cache 
		: { selectCategoryFeatureState: createFeatureSelector<DaffCategoryReducersState<T, V, U>>('category') };
})();
