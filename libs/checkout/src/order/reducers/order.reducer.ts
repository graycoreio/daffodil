import { OrderActions, OrderActionTypes } from '../actions/order.actions';
import { Order } from '../../models/order/order';

export interface State {
  order: Order,
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  order: null,
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: OrderActions): State {
  switch (action.type) {
    case OrderActionTypes.PlaceOrderAction:
      return {...state, loading: true};
    case OrderActionTypes.PlaceOrderSuccessAction:
      return {...state, order: action.payload, loading: false};
    case OrderActionTypes.PlaceOrderFailureAction:
      return {...state, errors: [action.payload], loading: false}
    default:
      return state;
  }
}

export const getOrder = (state: State) => state.order;

export const getLoading = (state: State) => state.loading;

export const getErrors = (state: State) => state.errors;
