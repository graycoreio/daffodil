import { PaymentActionTypes, PaymentActions } from '../actions/payment.actions';

export interface State {
  showPaymentView: boolean,
  showPaymentForm: boolean
}

export const initialState: State = {
  showPaymentView: false,
  showPaymentForm: null
};

export function reducer(state = initialState, action: PaymentActions): State {
  switch (action.type) {
    case PaymentActionTypes.ShowPaymentViewAction:
      return {...state, showPaymentView: true};
    case PaymentActionTypes.SetShowPaymentFormAction:
      return {...state, showPaymentForm: action.payload};
    case PaymentActionTypes.ToggleShowPaymentFormAction:
      return {...state, showPaymentForm: !state.showPaymentForm};
    default:
      return state;
  }
}

export const getShowPaymentView = (state: State) => state.showPaymentView;

export const getShowPaymentForm = (state: State) => state.showPaymentForm;
