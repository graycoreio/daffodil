import { DaffAuthorizeNetTokenResponse } from '../../models/response/authorize-net-token-response';

export interface DaffAuthorizeNetReducerState<T extends DaffAuthorizeNetTokenResponse> {
	tokenResponse: T;
	error: string;
}
