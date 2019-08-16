import { createEntityAdapter, EntityState, EntityAdapter, Dictionary } from '@ngrx/entity';

import { DaffCategoryActionTypes, DaffCategoryActions } from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoriesActionTypes, DaffCategoriesActions } from '../actions/categories.actions';

export interface State extends EntityState<DaffCategory> { }

export const categoryAdapter: EntityAdapter<DaffCategory> = createEntityAdapter<DaffCategory>();

export const initialState: State = categoryAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: DaffCategoryActions | DaffCategoriesActions): State {
    switch (action.type) {
      case DaffCategoryActionTypes.CategoryLoadSuccessAction:
        return categoryAdapter.upsertOne(
          {
            id: action.payload.id,
            ...action.payload
          },
          state
        );
      case DaffCategoriesActionTypes.CategoriesLoadSuccessAction:
        return categoryAdapter.upsertMany(action.payload, state);
      default:
        return state;
    }
  }

const { selectIds, selectEntities, selectAll, selectTotal } = categoryAdapter.getSelectors();

export const selectCategoryIds = selectIds;

export const selectCategoryEntities: (state: EntityState<DaffCategory>) => Dictionary<DaffCategory> = selectEntities;

export const selectAllCategories = selectAll;

export const selectCategoryTotal = selectTotal;
