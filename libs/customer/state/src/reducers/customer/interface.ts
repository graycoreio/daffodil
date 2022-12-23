import { DaffOperationState } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

/**
 * The main customer state.
 * Contains info about the current or most recent customer operation.
 */
export interface DaffCustomerReducerState<T extends DaffCustomer = DaffCustomer> extends DaffOperationState {
  customer: T;
}
