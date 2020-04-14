import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

import { daffCategoryEntitiesAdapter } from './category-entities-adapter';
import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategory } from '../../models/category';

export function daffCategoryEntitiesReducer<
	T extends DaffCategoryRequest = DaffCategoryRequest, 
	V extends DaffGenericCategory<V> = DaffCategory, 
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, 
	W extends DaffProduct = DaffProduct
>(
  state = daffCategoryEntitiesAdapter<V>().getInitialState(), 
	action: DaffCategoryActions<T, V, U, W>
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
