import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';
import { ShippingAddress } from '../models/shipping-address';

export interface State {
  shippingInfo: ShippingAddress,
  shippingOption: string
}

export const initialState: State = {
  shippingInfo: null,
  shippingOption: null
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingInfoAction:
      return {...state, shippingInfo: action.payload};
    case ShippingActionTypes.UpdateShippingOptionAction:
      return {...state, shippingOption: action.payload};
    default:
      return state;
  }
}

export const getShippingInfo = (state: State) => state.shippingInfo;

export const getShippingOption = (state: State) => state.shippingOption;

export const isShippingInfoValid = (shippingInfo: ShippingAddress) => {
  return !!shippingInfo;
};
