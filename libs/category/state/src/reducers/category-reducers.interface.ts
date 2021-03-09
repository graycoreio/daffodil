import { EntityState } from '@ngrx/entity';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageConfigurationState,
} from '@daffodil/category';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';

export interface DaffCategoryReducersState<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>
> {
  category: DaffCategoryReducerState<T, U>;
  categoryEntities: EntityState<V>;
}
