import { DaffPaymentReducerState } from './payment-reducer.interface';
import {
  DaffPaymentActionTypes,
  DaffPaymentActions,
} from '../../actions/payment.actions';

export const initialState: DaffPaymentReducerState = {
  paymentInfo: null,
};

export function daffPaymentReducer(state = initialState, action: DaffPaymentActions): DaffPaymentReducerState {
  switch (action.type) {
    case DaffPaymentActionTypes.UpdatePaymentInfoAction:
      return { ...state, paymentInfo: action.payload };
    default:
      return state;
  }
}
