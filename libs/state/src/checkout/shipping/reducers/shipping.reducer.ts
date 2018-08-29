import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';
import { DaffodilAddress } from '@daffodil/core';

export interface State {
  shippingInfo: DaffodilAddress,
  selectedShippingOptionIndex: number
}

export const initialState: State = {
  shippingInfo: null,
  selectedShippingOptionIndex: null
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingInfoAction:
      return {...state, shippingInfo: action.payload};
    case ShippingActionTypes.SelectShippingOptionAction:
    console.log(action.payload);
      return {...state, selectedShippingOptionIndex: action.payload};
    default:
      return state;
  }
}

export const getShippingInfo = (state: State) => state.shippingInfo;

export const getSelectedShippingOptionIndex = (state: State) => state.selectedShippingOptionIndex;

export const isShippingInfoValid = (shippingInfo: DaffodilAddress) => {
  return !!shippingInfo;
};
