import { DaffOrder } from '@daffodil/order';

import {
  DaffOrderActions,
  DaffOrderActionTypes,
} from '../../actions/order.actions';
import { daffOrderInitialState } from './order-initial-state';
import { DaffOrderReducerState } from './order-reducer.interface';

export function daffOrderReducer<T extends DaffOrder = DaffOrder>(
  state = daffOrderInitialState,
  action: DaffOrderActions<T>,
): DaffOrderReducerState {
  switch (action.type) {
    case DaffOrderActionTypes.OrderListAction:
    case DaffOrderActionTypes.OrderLoadAction:
      return {
        ...state,
        loading: true,
      };

    case DaffOrderActionTypes.OrderListSuccessAction:
    case DaffOrderActionTypes.OrderLoadSuccessAction:
      return {
        ...state,
        loading: false,
        errors: [],
      };

    case DaffOrderActionTypes.OrderListFailureAction:
    case DaffOrderActionTypes.OrderLoadFailureAction:
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
