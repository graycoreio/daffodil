import { EntityState } from '@ngrx/entity';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategory } from '../models/category';

export interface DaffCategoryReducersState<
	T extends DaffCategoryRequest = DaffCategoryRequest, 
	V extends DaffGenericCategory<V> = DaffCategory, 
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>
> {
  category: DaffCategoryReducerState<T, U>;
  categoryEntities: EntityState<V>;
}
