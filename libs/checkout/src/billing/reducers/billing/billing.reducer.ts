import { DaffBillingActionTypes, DaffBillingActions } from '../../actions/billing.actions';
import { DaffBillingReducerState } from './billing-reducer.interface';

export const initialState: DaffBillingReducerState = {
  billingAddress: null,
  billingAddressIsShippingAddress: false,
  paymentInfo: null
};

export function daffBillingReducer(state = initialState, action: DaffBillingActions): DaffBillingReducerState {
  switch (action.type) {
    case DaffBillingActionTypes.UpdateBillingAddressAction:
      return {...state, billingAddress: action.payload};
    case DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction:
      return {...state, billingAddress: null, billingAddressIsShippingAddress: !state.billingAddressIsShippingAddress}
    case DaffBillingActionTypes.UpdatePaymentInfoAction:
      return {...state, paymentInfo: action.payload};
    default:
      return state;
  }
}
