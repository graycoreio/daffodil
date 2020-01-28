import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from './authorize-net-reducers.interface';
import { daffAuthorizeNetReducer } from './authorize-net/authorize-net.reducer';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

export function daffAuthorizeNetReducers <T extends DaffAuthorizeNetTokenResponse>(): ActionReducerMap<DaffAuthorizeNetReducersState<T>> {
  return {
		authorizeNet: daffAuthorizeNetReducer
	}
}