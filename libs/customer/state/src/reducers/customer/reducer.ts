import { DaffCustomer } from '@daffodil/customer';

import {
  DaffCustomerActionTypes,
  DaffCustomerActions,
  DaffCustomerLoadFailure,
  DaffCustomerLoadSuccess,
} from '../../actions/customer.actions';
import { DaffCustomerStateReducerAdapter } from './adapter';
import { daffCustomerInitialState } from './initial-state';
import { DaffCustomerReducerState } from './interface';

/**
 * The reducer for the customer page state, see {@link DaffCustomerReducerState}.
 */
export const daffCustomerReducer = <T extends DaffCustomer = DaffCustomer>(
  state = daffCustomerInitialState,
  action: DaffCustomerActions<T>,
): DaffCustomerReducerState<T> => {
  const adapter = new DaffCustomerStateReducerAdapter<T>();
  switch (true) {
    case action.type === DaffCustomerActionTypes.CustomerLoadAction:
      return adapter.loadCustomer(state);

    case action.type === DaffCustomerActionTypes.CustomerLoadSuccessAction:
      return adapter.storeCustomer((<DaffCustomerLoadSuccess<T>>action).payload, state);

    case action.type === DaffCustomerActionTypes.CustomerLoadFailureAction:
      return adapter.storeError((<DaffCustomerLoadFailure>action).payload, state);

    default:
      return state;
  }
};
