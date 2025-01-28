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

import { DaffCategoryReducerState } from './category-reducer-state.interface';
import {
  DaffCategoryPageProductCollectionActionTypes,
  DaffCategoryPageProductCollectionActions,
} from '../../actions/category-page-filter.actions';
import { DaffCategoryPageActions } from '../../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../../actions/category-page.actions';
import { DaffCategoryActions } from '../../actions/category.actions';

export const daffCategoryInitialState: DaffCategoryReducerState = {
  ...daffOperationInitialState,
  id: null,
};

/**
 * Returns the state for category data except for category entities.
 */
export function daffCategoryReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(
  state = daffCategoryInitialState,
  action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W> | DaffCategoryPageProductCollectionActions,
): DaffCategoryReducerState {
  switch (action.type) {
    case DaffCategoryPageActionTypes.CategoryPageLoadAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction:
      return {
        ...daffStartResolution(state),
        id: null,
      };

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction:
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
