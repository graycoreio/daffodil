import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import {
  DaffCartPaymentActions,
  DaffCartPaymentActionTypes,
} from '@daffodil/cart/state';
import {
  DaffPaymentActions,
  DaffPaymentActionTypes,
} from '@daffodil/payment/state';

import {
  DaffAuthorizeNetActions,
  DaffAuthorizeNetActionTypes,
} from '../../actions/authorizenet.actions';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';

export const initialState: DaffAuthorizeNetReducerState = {
  isAcceptLoaded: false,
  paymentError: null,
  acceptJsLoadError: null,
  loading: false,
};

export function daffAuthorizeNetReducer <T extends DaffAuthorizeNetTokenRequest>(
  state: DaffAuthorizeNetReducerState = initialState,
  action: DaffAuthorizeNetActions<T> | DaffCartPaymentActions | DaffPaymentActions,
): DaffAuthorizeNetReducerState {
  switch (action.type) {
    case DaffAuthorizeNetActionTypes.UpdatePaymentAction:
    case DaffAuthorizeNetActionTypes.ApplyPaymentAction:
      return {
        ...state,
        loading: true,
      };
    case DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
    case DaffPaymentActionTypes.GenerateTokenSuccessAction:
      return {
        ...state,
        loading: false,
        paymentError: null,
      };
    case DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffPaymentActionTypes.GenerateTokenFailureAction:
      return {
        ...state,
        loading: false,
        paymentError: action.payload,
      };

    case DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction:
      return {
        ...state,
        isAcceptLoaded: true,
        acceptJsLoadError: null,
      };
    case DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction:
      return {
        ...state,
        loading: false,
        acceptJsLoadError: action.payload,
      };
    default:
      return state;
  }
}
