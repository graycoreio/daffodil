import { DaffGenericCategory } from '@daffodil/category';
import { DaffState } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import {
  DaffCategoryPageProductCollectionActionTypes,
  DaffCategoryPageProductCollectionActions,
} from '../../actions/category-page-filter.actions';
import { DaffCategoryPageActions } from '../../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../../actions/category-page.actions';
import { DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryReducerState } from './category-reducer-state.interface';

export const initialState: DaffCategoryReducerState = {
  daffState: DaffState.Stable,
  categoryLoading: false,
  productsLoading: false,
  errors: [],
  id: null,
};

/**
 * Returns the state for category data except for category entities.
 */
export function daffCategoryReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(
  state = initialState,
  action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W> | DaffCategoryPageProductCollectionActions,
): DaffCategoryReducerState {
  switch (action.type) {
    case DaffCategoryPageActionTypes.CategoryPageLoadAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction:
      return {
        ...state,
        categoryLoading: true,
        productsLoading: true,
        daffState: DaffState.Resolving,
        id: null,
      };

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageReplaceFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageApplyFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageClearFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageRemoveFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageToggleFilterAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
      };

    case DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction:
      return {
        ...state,
        categoryLoading: false,
        productsLoading: false,
        daffState: DaffState.Stable,
        id: action.response.category.id,
      };

    case DaffCategoryPageActionTypes.CategoryPageLoadFailureAction:
      return {
        ...state,
        categoryLoading: false,
        productsLoading: false,
        errors: [action.errorMessage],
        daffState: DaffState.Stable,
      };
    default:
      return state;
  }
}
