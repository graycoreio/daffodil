import { PaymentActionTypes, PaymentActions } from '../actions/payment.actions';
import { PaymentInfo } from '../models/payment-info';

export interface State {
  paymentInfo: PaymentInfo
}

export const initialState: State = {
  paymentInfo: null
};

export function reducer(state = initialState, action: PaymentActions): State {
  switch (action.type) {
    case PaymentActionTypes.UpdatePaymentInfoAction:
      return {...state, paymentInfo: action.payload};
    default:
      return state;
  }
}

export const getPaymentInfo = (state: State) => state.paymentInfo;
