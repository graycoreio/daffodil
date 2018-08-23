import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';
import { DaffodilAddress } from '@daffodil/core';

export interface State {
  shippingInfo: DaffodilAddress,
  selectedShippingOptionId: number
}

export const initialState: State = {
  shippingInfo: null,
  selectedShippingOptionId: null
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingInfoAction:
      return {...state, shippingInfo: action.payload};
    case ShippingActionTypes.SelectShippingOptionAction:
      return {...state, selectedShippingOptionId: action.payload};
    default:
      return state;
  }
}

export const getShippingInfo = (state: State) => state.shippingInfo;

export const getSelectedShippingOptionId = (state: State) => state.selectedShippingOptionId;

export const isShippingInfoValid = (shippingInfo: DaffodilAddress) => {
  return !!shippingInfo;
};
