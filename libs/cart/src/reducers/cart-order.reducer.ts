import { daffCartOrderInitialState } from './cart-order-initial-state';
import {
  DaffCartOrderActions,
  DaffCartOrderActionTypes
} from '../actions/public_api';
import { DaffCartOrderReducerState } from './cart-order-state.interface';

export function daffCartOrderReducer(
  state = daffCartOrderInitialState,
  action: DaffCartOrderActions
): DaffCartOrderReducerState {
  switch (action.type) {
    case DaffCartOrderActionTypes.CartPlaceOrderAction:
      return {
        ...state,
        loading: true
      };

    case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
      return {
        ...state,
        errors: [],
        loading: false,
        order: action.payload,
      };

    case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
      return {
        ...state,
        loading: false,
        errors: [
          ...state.errors,
          action.payload
        ]
      };

    default:
      return state;
  }
}
