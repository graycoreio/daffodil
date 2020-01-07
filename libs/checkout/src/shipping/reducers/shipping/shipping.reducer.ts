import { DaffShippingActionTypes, DaffShippingActions } from '../../actions/shipping.actions';
import { DaffShippingReducerState } from './shipping-reducer.interface';

export const initialState: DaffShippingReducerState = {
  shippingAddress: null,
  selectedShippingOptionId: null
};

export function daffShippingReducer(state = initialState, action: DaffShippingActions): DaffShippingReducerState {
  switch (action.type) {
    case DaffShippingActionTypes.UpdateShippingAddressAction:
      return {...state, shippingAddress: action.payload};
    case DaffShippingActionTypes.SelectShippingOptionAction:
      return {...state, selectedShippingOptionId: action.payload};
    default:
      return state;
  }
}
