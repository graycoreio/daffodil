import { DaffGenericCategory } from '@daffodil/category';
import {
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  daffStartMutation,
  daffStartResolution,
  DaffState,
} from '@daffodil/core/state';
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
  ...daffOperationInitialState,
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
      return daffStartResolution(state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageReplaceFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageApplyFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageClearFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageRemoveFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageToggleFilterAction:
      return daffStartMutation(state);

    case DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction:
      return {
        ...daffCompleteOperation(state),
        id: action.response.category.id,
      };

    case DaffCategoryPageActionTypes.CategoryPageLoadFailureAction:
      return daffOperationFailed([action.errorMessage], state);

    default:
      return state;
  }
}
