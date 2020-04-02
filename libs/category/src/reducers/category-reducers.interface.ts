import { EntityState } from '@ngrx/entity';

import { CategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

export interface CategoryReducersState<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState> {
  category: CategoryReducerState<U>;
  categoryEntities: EntityState<T>;
}
