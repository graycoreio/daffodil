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
  DaffSearchDocsCollectionActions,
  DaffSearchDocsCollectionActionTypes,
} from '../../actions/collection.actions';

export const daffSearchDocsCollectionReducer = (
  state: DaffCollectionMetadata = daffCollectionReducerInitialState,
  action: DaffSearchActions | DaffSearchDocsCollectionActions,
): DaffCollectionMetadata => {
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadAction:
      return getCollectionStateAdapter().storeRequest(<DaffCollectionRequest>action.options, state);

    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return getCollectionStateAdapter().setMetadata(<DaffCollectionMetadata>action.payload.metadata, state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsChangePageSizeAction:
      return getCollectionStateAdapter().setPageSize(action.pageSize, state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsChangeCurrentPageAction:
      return getCollectionStateAdapter().setCurrentPage(action.currentPage, state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsChangeSortingOptionAction:
      return getCollectionStateAdapter().setSort(action.sort.option, action.sort.direction, state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsReplaceFiltersAction:
      return getCollectionStateAdapter().setFilters(daffApplyRequestsToFilters(action.filters, daffClearFilters(state.filters)), state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsApplyFiltersAction:
      return getCollectionStateAdapter().setFilters(daffApplyRequestsToFilters(action.filters, state.filters), state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsClearFiltersAction:
      return getCollectionStateAdapter().setFilters(daffClearFilters(state.filters), state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsRemoveFiltersAction:
      return getCollectionStateAdapter().setFilters(daffRemoveRequestsFromFilters(action.filters, state.filters), state);

    case DaffSearchDocsCollectionActionTypes.SearchDocsToggleFiltersAction:
      return getCollectionStateAdapter().setFilters(daffToggleRequestOnFilters(action.filter, state.filters), state);

    case DaffSearchActionTypes.SearchLoadFailureAction:
      return daffCollectionReducerInitialState;

    default:
      return state;
  }
};
