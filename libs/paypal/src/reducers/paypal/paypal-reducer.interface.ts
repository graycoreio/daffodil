import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';

export interface DaffPaypalReducerState<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
	paypalTokenResponse: T;
	loading: boolean;
	error: string;
}
