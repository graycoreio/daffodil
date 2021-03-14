import { EntityState } from '@ngrx/entity';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';

import { DaffCategoryReducerState } from './category/category-reducer-state.interface';

export interface DaffCategoryReducersState<
	V extends DaffGenericCategory<V> = DaffCategory
> {
  category: DaffCategoryReducerState;
  categoryEntities: EntityState<V>;
}
