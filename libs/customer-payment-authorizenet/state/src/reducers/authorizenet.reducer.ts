import { DaffAuthorizeNetReducerState } from '@daffodil/authorizenet/state';
import {
  DaffCartPaymentActionTypes,
  DaffCartPaymentActions,
} from '@daffodil/cart/state';

import {
  DaffCustomerPaymentAuthorizeNetActionTypes,
  DaffCustomerPaymentAuthorizeNetActions,
} from '../actions/payment.actions';

export function daffCustomerPaymentAuthorizenetReducer(state: DaffAuthorizeNetReducerState, action: DaffCustomerPaymentAuthorizeNetActions | DaffCartPaymentActions): DaffAuthorizeNetReducerState {
  switch (action.type) {
    case DaffCustomerPaymentAuthorizeNetActionTypes.ApplyPaymentAction:
      return {
        ...state,
        loading: true,
      };

    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
