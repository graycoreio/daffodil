import {
  DaffPaypalActions,
  DaffPaypalActionTypes,
} from '../../actions/paypal.actions';
import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';
import { DaffPaypalReducerState } from './paypal-reducer.interface';

export const initialState: DaffPaypalReducerState<any> = {
  paypalTokenResponse: null,
  loading: false,
  error: null,
};

export function daffPaypalReducer <T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse>(state: DaffPaypalReducerState<V> = initialState, action: DaffPaypalActions<T, V>): DaffPaypalReducerState<V> {
  switch (action.type) {
  case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
    return { ...state, loading: true };
  case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
    return { ...state, paypalTokenResponse: action.payload, loading: false, error: null };
  case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
    return { ...state, error: action.payload, loading: false, paypalTokenResponse: null };
  default:
    return state;
  }
}
