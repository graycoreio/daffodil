import { DaffodilAddress } from '@daffodil/core';

import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';

export interface State {
  shippingAddress: DaffodilAddress,
  selectedShippingOptionId: string
}

export const initialState: State = {
  shippingAddress: null,
  selectedShippingOptionId: null
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.UpdateShippingAddressAction:
      return {...state, shippingAddress: action.payload};
    case ShippingActionTypes.SelectShippingOptionAction:
      return {...state, selectedShippingOptionId: action.payload};
    default:
      return state;
  }
}

export const getShippingAddress = (state: State) => state.shippingAddress;

export const getSelectedShippingOptionIndex = (state: State) => state.selectedShippingOptionId;

export const isShippingAddressValid = (shippingAddress: DaffodilAddress) => {
  return !!shippingAddress;
};
