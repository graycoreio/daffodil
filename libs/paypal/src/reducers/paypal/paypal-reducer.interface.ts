import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';
import { DaffStateError } from '@daffodil/core/state';

export interface DaffPaypalReducerState<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
	paypalTokenResponse: T;
	loading: boolean;
	error: DaffStateError;
}
