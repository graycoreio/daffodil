import { ActionReducerMap } from '@ngrx/store';

import { DaffCategoryReducersState } from './category-reducers.interface';
import { daffCategoryReducer } from './category/category.reducer';
import { daffCategoryEntitiesReducer } from './category-entities/category-entities.reducer';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

export function daffCategoryReducers<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState>(): ActionReducerMap<DaffCategoryReducersState<T, U>> {
	return {
		category: daffCategoryReducer,
		categoryEntities: daffCategoryEntitiesReducer
	};
}