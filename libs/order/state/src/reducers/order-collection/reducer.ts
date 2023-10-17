import {
  daffApplyRequestsToFilters,
  daffClearFilters,
} from '@daffodil/core';
import {
  daffCollectionReducerInitialState,
  getCollectionStateAdapter,
} from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

import { DaffOrderCollectionReducerState } from './state.interface';
import {
  DaffOrderActionTypes,
  DaffOrderActions,
  DaffOrderCollectionActions,
  DaffOrderCollectionActionTypes,
} from '../../actions/public_api';

/**
 * Handles the reduction of order actions into the collection metadata state.
 */
export function daffOrdersCollectionReducer<T extends DaffOrder = DaffOrder>(
  state = daffCollectionReducerInitialState,
  action: DaffOrderActions<T> | DaffOrderCollectionActions,
): DaffOrderCollectionReducerState {
  const adapter = getCollectionStateAdapter();

  switch (action.type) {
    case DaffOrderActionTypes.OrderListAction:
      return adapter.storeRequest(action.request, state);

    case DaffOrderActionTypes.OrderListSuccessAction:
      return adapter.setMetadata(action.payload.metadata, state);

    case DaffOrderActionTypes.OrderListFailureAction:
      return daffCollectionReducerInitialState;

    case DaffOrderCollectionActionTypes.ChangePageSizeAction:
      return adapter.setPageSize(action.pageSize, state);

    case DaffOrderCollectionActionTypes.ChangeCurrentPageAction:
      return adapter.setCurrentPage(action.currentPage, state);

    case DaffOrderCollectionActionTypes.ChangeSortingAction:
      return adapter.setSort(action.sort.option, action.sort.direction, state);

    case DaffOrderCollectionActionTypes.ChangeFilterAction:
      return adapter.setFilters(daffApplyRequestsToFilters(action.filters, daffClearFilters(state.filters)), state);

    default:
      return state;
  }
}
