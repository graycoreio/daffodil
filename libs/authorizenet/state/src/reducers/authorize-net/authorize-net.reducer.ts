import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import {
  DaffPaymentActions,
  DaffPaymentActionTypes,
} from '@daffodil/payment/state';

import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { daffAuthorizeNetReducerInitialState } from './initial-state';
import {
  DaffAuthorizeNetActions,
  DaffAuthorizeNetActionTypes,
} from '../../actions/authorizenet.actions';

export function daffAuthorizeNetReducer <T extends DaffAuthorizeNetTokenRequest>(
  state: DaffAuthorizeNetReducerState = daffAuthorizeNetReducerInitialState,
  action: DaffAuthorizeNetActions<T> | DaffPaymentActions,
): DaffAuthorizeNetReducerState {
  switch (action.type) {
    case DaffAuthorizeNetActionTypes.UpdatePaymentAction:
    case DaffAuthorizeNetActionTypes.ApplyPaymentAction:
      return {
        ...state,
        loading: true,
      };
    case DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction:
    case DaffPaymentActionTypes.GenerateTokenSuccessAction:
      return {
        ...state,
        loading: false,
        paymentError: null,
      };
    case DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction:
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
