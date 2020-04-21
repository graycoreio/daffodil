import { daffCartOrderInitialState } from './cart-order-initial-state';
import {
  DaffCartOrderActions,
  DaffCartOrderActionTypes
} from '../actions/public_api';
import { DaffCartOrderReducerState } from './cart-order-state.interface';
import { DaffCartOrderResult } from '../models/cart-order-result';

export function daffCartOrderReducer<T extends DaffCartOrderResult = DaffCartOrderResult>(
  state = daffCartOrderInitialState,
  action: DaffCartOrderActions<T>
): DaffCartOrderReducerState<T> {
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
        cartOrderResult: action.payload,
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
