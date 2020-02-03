import { DaffAuthorizeNetReducerState } from './authorize-net/authorize-net-reducer.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

export interface DaffAuthorizeNetReducersState<T extends DaffAuthorizeNetTokenResponse> {
	authorizeNet: DaffAuthorizeNetReducerState<T>;
}