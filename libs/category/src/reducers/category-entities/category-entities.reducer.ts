import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

import {
  DaffCategoryActionTypes,
  DaffCategoryActions,
} from '../../actions/category.actions';
import { DaffCategory } from '../../models/category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { daffCategoryEntitiesAdapter } from './category-entities-adapter';

export function daffCategoryEntitiesReducer<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
>(
  state = daffCategoryEntitiesAdapter<V>().getInitialState(),
  action: DaffCategoryActions<T, V, U, W>,
): EntityState<V> {
  switch (action.type) {
  case DaffCategoryActionTypes.CategoryLoadSuccessAction:
  case DaffCategoryActionTypes.CategoryPageLoadSuccessAction:
    return daffCategoryEntitiesAdapter<V>().upsertOne(
      {
        id: action.response.category.id,
        ...action.response.category,
      },
      state,
    );
  default:
    return state;
  }
}
