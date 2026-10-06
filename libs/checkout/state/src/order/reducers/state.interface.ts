import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import { DaffOperationState } from '@daffodil/core/state';

export interface DaffCheckoutOrderReducerState<T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult> extends DaffOperationState {
  orderResult: T;
}
