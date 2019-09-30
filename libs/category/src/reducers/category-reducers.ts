import { ActionReducerMap } from '@ngrx/store';

import { CategoryReducersState } from './category-reducers.interface';
import { categoryReducer } from './category/category.reducer';
import { categoryEntitiesReducer } from './category-entities/category-entities.reducer';

export const categoryReducers: ActionReducerMap<CategoryReducersState> = {
  category: categoryReducer,
  categoryEntities: categoryEntitiesReducer
}