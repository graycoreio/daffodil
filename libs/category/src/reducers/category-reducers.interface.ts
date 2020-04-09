import { EntityState } from '@ngrx/entity';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

export interface DaffCategoryReducersState<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState> {
  category: DaffCategoryReducerState<U>;
  categoryEntities: EntityState<T>;
}
