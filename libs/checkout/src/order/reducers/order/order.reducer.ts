import { DaffOrderActions, DaffOrderActionTypes } from '../../actions/order.actions';
import { DaffOrderReducerState } from './order-reducer.interface';

export const initialState: DaffOrderReducerState = {
  order: null,
  loading: false,
  errors: []
};

export function daffOrderReducer(state = initialState, action: DaffOrderActions): DaffOrderReducerState {
  switch (action.type) {
    case DaffOrderActionTypes.PlaceOrderAction:
      return {...state, loading: true};
    case DaffOrderActionTypes.PlaceOrderSuccessAction:
      return {...state, order: action.payload, loading: false};
    case DaffOrderActionTypes.PlaceOrderFailureAction:
      return {...state, errors: [action.payload], loading: false}
    default:
      return state;
  }
}
