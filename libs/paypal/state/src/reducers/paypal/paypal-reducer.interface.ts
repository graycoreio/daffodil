import { DaffStateError } from '@daffodil/core/state';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';

export interface DaffPaypalReducerState<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
  paypalTokenResponse: T;
  loading: boolean;
  error: DaffStateError;
}
