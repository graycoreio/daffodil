import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';
import { Address } from '../../../interfaces/models/address';

export interface State {
  shipping: Address
}

export const initialState: State = {
  shipping: null,
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingAction:
      return {...state, shipping: action.payload};
    default:
      return state;
  }
}

export const getShipping = (state: State) => state.shipping;
