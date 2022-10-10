import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';

import {
  DaffPaypalActions,
  DaffPaypalActionTypes,
} from '../../actions/paypal.actions';
import { DaffPaypalReducerState } from './paypal-reducer.interface';

export const initialState: DaffPaypalReducerState = {
  loading: false,
  error: null,
};

export function daffPaypalReducer <T extends DaffPaypalExpressTokenRequest, V extends DaffPaypalExpressTokenResponse>(state: DaffPaypalReducerState = initialState, action: DaffPaypalActions<T, V>): DaffPaypalReducerState {
  switch (action.type) {
    case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
      return { ...state, loading: true };
    case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
      return { ...state, loading: false, error: null };
    case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
