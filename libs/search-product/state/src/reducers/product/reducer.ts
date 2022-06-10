import {
  DaffProductReducerState,
  daffProductReducerInitialState,
} from '@daffodil/product/state';
import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '@daffodil/search/state';

import {
  DaffSearchProductCollectionActions,
  DaffSearchProductCollectionActionTypes,
} from '../../actions/product-collection.actions';

/**
 * The reducer for handling apply product filters actions in the main search state.
 */
export function daffSearchProductProductReducer(
  state = daffProductReducerInitialState,
  action: DaffSearchProductCollectionActions | DaffSearchActions,
): DaffProductReducerState {
  switch (action.type) {
    case DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductChangeCurrentPageAction:
    case DaffSearchProductCollectionActionTypes.SearchProductChangePageSizeAction:
    case DaffSearchProductCollectionActionTypes.SearchProductChangeSortingOptionAction:
    case DaffSearchActionTypes.SearchIncrementalAction:
    case DaffSearchActionTypes.SearchLoadAction:
      return {
        ...state,
        loading: true,
      };

    case DaffSearchActionTypes.SearchIncrementalSuccessAction:
    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return {
        ...state,
        loading: false,
        errors: [],
      };

    // TODO: should we care about the errors here?
    case DaffSearchActionTypes.SearchIncrementalFailureAction:
    case DaffSearchActionTypes.SearchLoadFailureAction:
      return {
        ...state,
        errors: [
          ...state.errors,
          action.payload,
        ],
        loading: false,
      };

    default:
      return state;
  }
}
