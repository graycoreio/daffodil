import { EntityState } from '@ngrx/entity';

import { categoryEntitiesAdapter } from './category-entities-adapter';
import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';

export function categoryEntitiesReducer<T extends DaffCategoryRequest, U extends DaffGenericCategory<U>, V extends DaffCategoryPageConfigurationState>(
  state = categoryEntitiesAdapter<U>().getInitialState(), 
	action: DaffCategoryActions<T, U, V>
): EntityState<U> {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return categoryEntitiesAdapter<U>().upsertOne(
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
