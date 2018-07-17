import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';
import { ShippingAddress } from '../models/shipping-address';

export interface State {
  shippingInfo: ShippingAddress,
  selectedShippingOption: string
}

export const initialState: State = {
  shippingInfo: null,
  selectedShippingOption: null
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingInfoAction:
      return {...state, shippingInfo: action.payload};
    case ShippingActionTypes.SelectShippingOptionAction:
      return {...state, selectedShippingOption: action.payload};
    default:
      return state;
  }
}

export const getShippingInfo = (state: State) => state.shippingInfo;

export const getSelectedShippingOption = (state: State) => state.selectedShippingOption;

export const isShippingInfoValid = (shippingInfo: ShippingAddress) => {
  return !!shippingInfo;
};

export const isShippingOptionSelected = (selectedShippingOption: string) => {
  return !!selectedShippingOption;
}
