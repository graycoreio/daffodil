import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
import { DaffPaypalReducerState } from './paypal/paypal-reducer.interface';

export interface DaffPaypalReducersState<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
  paypal: DaffPaypalReducerState<T>;
}
