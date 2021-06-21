import { EntityState } from '@ngrx/entity';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';

import {
  DaffCategoryPageActionTypes,
  DaffCategoryPageActions,
} from '../../actions/category-page.actions';
import {
  DaffCategoryActionTypes,
  DaffCategoryActions,
} from '../../actions/category.actions';
import { daffCategoryEntitiesAdapter } from './category-entities-adapter';

/**
 * A reducer function to store category entities from DaffCategoryLoadSuccess and DaffCategoryPageLoadSuccess actions.
 */
export function daffCategoryEntitiesReducer<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct
>(
  state = daffCategoryEntitiesAdapter<V>().getInitialState(),
  action: DaffCategoryActions<V,W> | DaffCategoryPageActions<V,W>,
): EntityState<V> {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction:
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
