import { ShippingActionTypes, ShippingActions } from '../actions/shipping.actions';

export interface State {
  showShippingForm: boolean
}

export const initialState: State = {
  showShippingForm: null
};

export function reducer(state = initialState, action: ShippingActions): State {
  switch (action.type) {
    case ShippingActionTypes.ToggleShippingFormAction:
      return {...state, showShippingForm: !state.showShippingForm};
    case ShippingActionTypes.SetShowShippingFormAction:
      return {...state, showShippingForm: action.payload};
    default:
      return state;
  }
}

export const getShowShippingForm = (state: State) => state.showShippingForm;
