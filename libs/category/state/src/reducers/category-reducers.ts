import { ActionReducerMap } from '@ngrx/store';

import { daffCategoryEntitiesReducer } from './category-entities/category-entities.reducer';
import { DaffCategoryReducersState } from './category-reducers.interface';
import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './category-store-feature-key';
import { daffCategoryReducer } from './category/category.reducer';

export interface DaffCategoryRootSlice {
  [DAFF_CATEGORY_STORE_FEATURE_KEY]: DaffCategoryReducersState;
}

export const daffCategoryReducers: ActionReducerMap<DaffCategoryReducersState> = {
  category: daffCategoryReducer,
  categoryEntities: daffCategoryEntitiesReducer,
};
