import { EntityState } from '@ngrx/entity';

import { daffCategoryEntitiesAdapter } from './category-entities-adapter';
import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';

export function daffCategoryEntitiesReducer<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(
  state = daffCategoryEntitiesAdapter<V>().getInitialState(), 
	action: DaffCategoryActions<T, V, U>
): EntityState<V> {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return daffCategoryEntitiesAdapter<V>().upsertOne(
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
