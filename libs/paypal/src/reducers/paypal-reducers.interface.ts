import { DaffPaypalReducerState } from './paypal/paypal-reducer.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

export interface DaffPaypalReducersState<T extends DaffPaypalTokenResponse> {
	paypal: DaffPaypalReducerState<T>;
}
