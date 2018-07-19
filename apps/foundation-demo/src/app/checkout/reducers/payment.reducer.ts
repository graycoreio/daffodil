import { PaymentActionTypes, PaymentActions } from '../actions/payment.actions';

export interface State {
  showPaymentView: boolean
}

export const initialState: State = {
  showPaymentView: false
};

export function reducer(state = initialState, action: PaymentActions): State {
  switch (action.type) {
    case PaymentActionTypes.ShowPaymentViewAction:
      return {...state, showPaymentView: !state.showPaymentView};
    default:
      return state;
  }
}

export const getShowPaymentView = (state: State) => state.showPaymentView;
