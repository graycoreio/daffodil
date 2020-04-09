import { EntityState } from '@ngrx/entity';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategoryRequest } from '../models/requests/category-request';

export interface DaffCategoryReducersState<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>> {
  category: DaffCategoryReducerState<T, U>;
  categoryEntities: EntityState<V>;
}
