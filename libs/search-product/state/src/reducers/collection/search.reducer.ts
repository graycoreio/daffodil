import {
  daffSearchInitialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';

import {
  DaffSearchProductCollectionActions,
  DaffSearchProductCollectionActionTypes,
} from '../../actions/product-collection.actions';

/**
 * The reducer for handling apply product filters actions in the main search state.
 */
export function daffSearchProductCollectionSearchReducer(
  state = daffSearchInitialState,
  action: DaffSearchProductCollectionActions,
): DaffSearchReducerState {
  switch (action.type) {
    case DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction:
    case DaffSearchProductCollectionActionTypes.SearchProductChangeCurrentPageAction:
    case DaffSearchProductCollectionActionTypes.SearchProductChangePageSizeAction:
    case DaffSearchProductCollectionActionTypes.SearchProductChangeSortingOptionAction:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
