import { ActionReducerMap } from '@ngrx/store';

import { daffPaypalReducer } from './paypal/paypal.reducer';
import { DaffPaypalReducersState } from './paypal-reducers.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

export function daffPaypalReducers <T extends DaffPaypalTokenResponse>(): ActionReducerMap<DaffPaypalReducersState<T>> {
  return {
		paypal: daffPaypalReducer
	}
}
