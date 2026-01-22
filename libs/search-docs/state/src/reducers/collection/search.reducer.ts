import {
  daffSearchInitialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';

import {
  DaffSearchDocsCollectionActions,
  DaffSearchDocsCollectionActionTypes,
} from '../../actions/collection.actions';

/**
 * The reducer for handling apply docs filters actions in the main search state.
 */
export function daffSearchDocsCollectionSearchReducer(
  state = daffSearchInitialState,
  action: DaffSearchDocsCollectionActions,
): DaffSearchReducerState {
  switch (action.type) {
    case DaffSearchDocsCollectionActionTypes.SearchDocsApplyFiltersAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsReplaceFiltersAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsRemoveFiltersAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsClearFiltersAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsToggleFiltersAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsChangeCurrentPageAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsChangePageSizeAction:
    case DaffSearchDocsCollectionActionTypes.SearchDocsChangeSortingOptionAction:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
