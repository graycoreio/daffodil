import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';
import { ShippingAddress } from '../models/shipping-address';

export interface State {
  shippingInfo: ShippingAddress
}

export const initialState: State = {
  shippingInfo: null,
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingInfoAction:
      return {...state, shippingInfo: action.payload};
    default:
      return state;
  }
}

export const getShippingInfo = (state: State) => state.shippingInfo;
