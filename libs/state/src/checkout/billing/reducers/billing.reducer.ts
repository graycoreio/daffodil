import { BillingActionTypes, BillingActions } from '../actions/billing.actions';
import { DaffodilAddress, PaymentInfo } from '@daffodil/core';

export interface State {
  billingAddress: DaffodilAddress;
  billingAddressIsShippingAddress: boolean;
  paymentInfo: PaymentInfo;
}

export const initialState: State = {
  billingAddress: null,
  billingAddressIsShippingAddress: false,
  paymentInfo: null
};

export function reducer(state = initialState, action: BillingActions): State {
  switch (action.type) {
    case BillingActionTypes.UpdateBillingAddressAction:
      return {...state, billingAddress: action.payload};
    case BillingActionTypes.ToggleBillingAddressIsShippingAddressAction:
      return {...state, billingAddress: null, billingAddressIsShippingAddress: !state.billingAddressIsShippingAddress}
    case BillingActionTypes.UpdatePaymentInfoAction:
      return {...state, paymentInfo: action.payload};
    default:
      return state;
  }
}

export const getBillingAddress = (state: State) => state.billingAddress;

export const getBillingAddressIsShippingAddress = (state: State) => state.billingAddressIsShippingAddress;

export const getPaymentInfo = (state: State) => state.paymentInfo;
