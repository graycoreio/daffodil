import { ActionReducerMap } from '@ngrx/store';

import { CategoryReducersState } from './category-reducers.interface';
import { categoryReducer } from './category/category.reducer';
import { categoryEntitiesReducer } from './category-entities/category-entities.reducer';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

export function categoryReducers<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState>(): ActionReducerMap<CategoryReducersState<T, U>> {
	return {
		category: categoryReducer,
		categoryEntities: categoryEntitiesReducer
	};
}