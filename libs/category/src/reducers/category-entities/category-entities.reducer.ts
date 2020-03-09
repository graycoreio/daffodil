import { EntityState } from '@ngrx/entity';

import { categoryEntitiesAdapter } from './category-entities-adapter';
import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategory } from '../../models/category';

export const initialState: EntityState<DaffCategory> = categoryEntitiesAdapter.getInitialState();

export function categoryEntitiesReducer(
  state = initialState, 
  action: DaffCategoryActions): EntityState<DaffCategory> {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return categoryEntitiesAdapter.upsertOne(
        { 
          id: action.response.category.id, 
          ...action.response.category
        },
        state
      );
    default:
      return state;
  }
}
