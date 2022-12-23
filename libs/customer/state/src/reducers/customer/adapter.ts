import { daffCompleteOperation } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerReducerState } from './interface';

/**
 * Stores the customer in state.
 * Sets loading to false and resets errors.
 */
export function daffCustomerStateStoreCustomer<T extends DaffCustomer = DaffCustomer>(customer: T, state: DaffCustomerReducerState<T>): DaffCustomerReducerState<T> {
  return {
    ...state,
    ...daffCompleteOperation(state),
    customer,
  };
}
