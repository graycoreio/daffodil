import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerReducerState } from './interface';

/**
 * Manages {@link DaffCustomerReducerState}.
 */
export class DaffCustomerStateReducerAdapter<T extends DaffCustomer = DaffCustomer> {

  /**
   * Begins the customer operation flow.
   * Sets loading to true.
   */
  loadCustomer(state: DaffCustomerReducerState<T>): DaffCustomerReducerState<T> {
    return {
      ...state,
      loading: true,
    };
  }

  /**
   * Stores the customer in state.
   * Sets loading to false and resets errors.
   */
  storeCustomer(customer: T, state: DaffCustomerReducerState<T>): DaffCustomerReducerState<T> {
    return {
      ...state,
      customer,
      loading: false,
      errors: [],
    };
  }

  /**
   * Stores the from a failed customer.
   * Also sets loading to false.
   */
  storeError(error: DaffStateError, state: DaffCustomerReducerState<T>): DaffCustomerReducerState<T> {
    return {
      ...state,
      errors: [
        ...state.errors,
        error,
      ],
      loading: false,
    };
  }
}
