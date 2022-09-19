import {
  daffApplyRequestsToFilters,
  daffClearFilters,
  DaffCollectionMetadata,
  DaffCollectionRequest,
  daffRemoveRequestsFromFilters,
  daffToggleRequestOnFilters,
} from '@daffodil/core';
import {
  daffCollectionReducerInitialState,
  getCollectionStateAdapter,
} from '@daffodil/core/state';
import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '@daffodil/search/state';

import {
  DaffSearchProductCollectionActions,
  DaffSearchProductCollectionActionTypes,
} from '../../actions/product-collection.actions';

export const daffSearchProductCollectionReducer = (
  state: DaffCollectionMetadata = daffCollectionReducerInitialState,
  action: DaffSearchActions | DaffSearchProductCollectionActions,
): DaffCollectionMetadata => {
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadAction:
      return getCollectionStateAdapter().storeRequest(<DaffCollectionRequest>action.options, state);

    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return getCollectionStateAdapter().setMetadata(<DaffCollectionMetadata>action.payload.metadata, state);

    case DaffSearchProductCollectionActionTypes.SearchProductChangePageSizeAction:
      return getCollectionStateAdapter().setPageSize(action.pageSize, state);

    case DaffSearchProductCollectionActionTypes.SearchProductChangeCurrentPageAction:
      return getCollectionStateAdapter().setCurrentPage(action.currentPage, state);

    case DaffSearchProductCollectionActionTypes.SearchProductChangeSortingOptionAction:
      return getCollectionStateAdapter().setSort(action.sort.option, action.sort.direction, state);

    case DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction:
      return getCollectionStateAdapter().setFilters(daffApplyRequestsToFilters(action.filters, daffClearFilters(state.filters)), state);

    case DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction:
      return getCollectionStateAdapter().setFilters(daffApplyRequestsToFilters(action.filters, state.filters), state);

    case DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction:
      return getCollectionStateAdapter().setFilters(daffClearFilters(state.filters), state);

    case DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction:
      return getCollectionStateAdapter().setFilters(daffRemoveRequestsFromFilters(action.filters, state.filters), state);

    case DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction:
      return getCollectionStateAdapter().setFilters(daffToggleRequestOnFilters(action.filter, state.filters), state);

    case DaffSearchActionTypes.SearchLoadFailureAction:
      return daffCollectionReducerInitialState;

    default:
      return state;
  }
};
