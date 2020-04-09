import { EntityState } from '@ngrx/entity';

import { daffCategoryEntitiesAdapter } from './category-entities-adapter';
import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';

export function daffCategoryEntitiesReducer<T extends DaffCategoryRequest, U extends DaffGenericCategory<U>, V extends DaffCategoryPageConfigurationState>(
  state = daffCategoryEntitiesAdapter<U>().getInitialState(), 
	action: DaffCategoryActions<T, U, V>
): EntityState<U> {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return daffCategoryEntitiesAdapter<U>().upsertOne(
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
