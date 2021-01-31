import { DaffCartOrderResult } from '@daffodil/cart';
import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartOrderActions,
  DaffCartOrderActionTypes,
} from '../../actions/public_api';
import { daffCartOrderInitialState } from './cart-order-initial-state';
import { DaffCartOrderReducerState } from './cart-order-state.interface';

export function daffCartOrderReducer<T extends DaffCartOrderResult = DaffCartOrderResult>(
  state = daffCartOrderInitialState,
  action: DaffCartOrderActions<T>,
): DaffCartOrderReducerState<T> {
  switch (action.type) {
  case DaffCartOrderActionTypes.CartPlaceOrderAction:
    return {
      ...state,
      loading: DaffLoadingState.Mutating,
    };

  case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
    return {
      ...state,
      errors: [],
      loading: DaffLoadingState.Complete,
      cartOrderResult: action.payload,
    };

  case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
    return {
      ...state,
      loading: DaffLoadingState.Complete,
      errors: [
        ...state.errors,
        action.payload,
      ],
    };

  default:
    return state;
  }
}
