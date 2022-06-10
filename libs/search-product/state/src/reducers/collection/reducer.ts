import {
  daffApplyRequestsToFilters,
  daffClearFilters,
  DaffProductCollectionMetadata,
  DaffProductCollectionRequest,
  daffRemoveRequestsFromFilters,
  daffToggleRequestOnFilters,
} from '@daffodil/product';
import {
  daffProductCollectionReducerInitialState,
  DaffProductCollectionReducerState,
  getProductCollectionStateAdapter,
} from '@daffodil/product/state';
import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '@daffodil/search/state';

import {
  DaffSearchProductCollectionActions,
  DaffSearchProductCollectionActionTypes,
} from '../../actions/product-collection.actions';

export const daffSearchProductCollectionReducer = (
  state: DaffProductCollectionReducerState = daffProductCollectionReducerInitialState,
  action: DaffSearchActions | DaffSearchProductCollectionActions,
): DaffProductCollectionReducerState => {
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadAction:
      return getProductCollectionStateAdapter().storeRequest(<DaffProductCollectionRequest>action.options, state);

    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return getProductCollectionStateAdapter().setMetadata(<DaffProductCollectionMetadata>action.payload.metadata, state);

    case DaffSearchProductCollectionActionTypes.SearchProductChangePageSizeAction:
      return getProductCollectionStateAdapter().setPageSize(action.pageSize, state);

    case DaffSearchProductCollectionActionTypes.SearchProductChangeCurrentPageAction:
      return getProductCollectionStateAdapter().setCurrentPage(action.currentPage, state);

    case DaffSearchProductCollectionActionTypes.SearchProductChangeSortingOptionAction:
      return getProductCollectionStateAdapter().setSort(action.sort.option, action.sort.direction, state);

    case DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction:
      return getProductCollectionStateAdapter().setFilters(daffApplyRequestsToFilters(action.filters, daffClearFilters(state.filters)), state);

    case DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction:
      return getProductCollectionStateAdapter().setFilters(daffApplyRequestsToFilters(action.filters, state.filters), state);

    case DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction:
      return getProductCollectionStateAdapter().setFilters(daffClearFilters(state.filters), state);

    case DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction:
      return getProductCollectionStateAdapter().setFilters(daffRemoveRequestsFromFilters(action.filters, state.filters), state);

    case DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction:
      return getProductCollectionStateAdapter().setFilters(daffToggleRequestOnFilters(action.filter, state.filters), state);

    case DaffSearchActionTypes.SearchLoadFailureAction:
      return daffProductCollectionReducerInitialState;

    default:
      return state;
  }
};
