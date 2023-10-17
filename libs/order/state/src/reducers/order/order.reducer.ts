import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

import { daffOrderInitialState } from './order-initial-state';
import { DaffOrderReducerState } from './order-reducer.interface';
import {
  DaffOrderActions,
  DaffOrderActionTypes,
  DaffOrderCollectionActions,
  DaffOrderCollectionActionTypes,
} from '../../actions/public_api';

export function daffOrderReducer<T extends DaffOrder = DaffOrder>(
  state = daffOrderInitialState,
  action: DaffOrderActions<T> | DaffOrderCollectionActions,
): DaffOrderReducerState {
  switch (action.type) {
    case DaffOrderActionTypes.OrderListAction:
    case DaffOrderActionTypes.OrderLoadAction:
      return daffStartResolution(state);

    case DaffOrderCollectionActionTypes.ChangePageSizeAction:
    case DaffOrderCollectionActionTypes.ChangeCurrentPageAction:
    case DaffOrderCollectionActionTypes.ChangeFilterAction:
    case DaffOrderCollectionActionTypes.ChangeSortingAction:
      return daffStartMutation(state);

    case DaffOrderActionTypes.OrderListSuccessAction:
    case DaffOrderActionTypes.OrderLoadSuccessAction:
      return daffCompleteOperation(state);

    case DaffOrderActionTypes.OrderListFailureAction:
    case DaffOrderActionTypes.OrderLoadFailureAction:
      return daffOperationFailed([action.payload], state);

    default:
      return state;
  }
}
