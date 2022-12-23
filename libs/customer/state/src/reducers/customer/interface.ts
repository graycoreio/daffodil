import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

/**
 * The main customer state.
 * Contains info about the current or most recent customer operation.
 */
export interface DaffCustomerReducerState<T extends DaffCustomer = DaffCustomer> {
  customer: T;
  /**
   * Whether there is a pending customer operation.
   */
  loading: boolean;
  /**
   * A list of customer errors, if any.
   */
  errors: DaffStateError[];
}
