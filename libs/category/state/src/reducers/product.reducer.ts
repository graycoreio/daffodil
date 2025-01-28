import { DaffGenericCategory } from '@daffodil/category';
import {
  daffCompleteOperation,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  daffProductReducerInitialState,
  DaffProductReducerState,
} from '@daffodil/product/state';

import {
  DaffCategoryPageProductCollectionActionTypes,
  DaffCategoryPageProductCollectionActions,
} from '../actions/category-page-filter.actions';
import { DaffCategoryPageActions } from '../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../actions/category-page.actions';
import { DaffCategoryActions } from '../actions/category.actions';

/**
 * Modifies product state for category actions.
 */
export function daffCategoryProductReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(
  state: DaffProductReducerState = daffProductReducerInitialState,
  action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W> | DaffCategoryPageProductCollectionActions,
): DaffProductReducerState {
  switch (action.type) {
    case DaffCategoryPageActionTypes.CategoryPageLoadAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction:
      return daffStartResolution(state);

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
    case DaffCategoryPageActionTypes.CategoryPageLoadFailureAction:
      return daffCompleteOperation(state);

    default:
      return state;
  }
}
