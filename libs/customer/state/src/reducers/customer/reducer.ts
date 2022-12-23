import {
  daffClearErrors,
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import {
  DaffCustomerActionTypes,
  DaffCustomerActions,
  DaffCustomerLoadFailure,
  DaffCustomerLoadSuccess,
} from '../../actions/customer.actions';
import { daffCustomerStateStoreCustomer } from './adapter';
import { daffCustomerInitialState } from './initial-state';
import { DaffCustomerReducerState } from './interface';

/**
 * The reducer for the customer page state, see {@link DaffCustomerReducerState}.
 */
export const daffCustomerReducer = <T extends DaffCustomer = DaffCustomer>(
  state = daffCustomerInitialState,
  action: DaffCustomerActions<T>,
): DaffCustomerReducerState<T> => {
  switch (true) {
    case action.type === DaffCustomerActionTypes.CustomerLoadAction:
      return daffStartResolution(state);

    case action.type === DaffCustomerActionTypes.CustomerUpdateAction:
    case action.type === DaffCustomerActionTypes.CustomerChangeEmailAction:
    case action.type === DaffCustomerActionTypes.CustomerChangePasswordAction:
      return daffStartMutation(state);

    case action.type === DaffCustomerActionTypes.CustomerLoadSuccessAction:
    case action.type === DaffCustomerActionTypes.CustomerUpdateSuccessAction:
    case action.type === DaffCustomerActionTypes.CustomerChangeEmailSuccessAction:
      return daffCustomerStateStoreCustomer((<DaffCustomerLoadSuccess<T>>action).payload, state);

    case action.type === DaffCustomerActionTypes.CustomerChangePasswordSuccessAction:
      return daffCompleteOperation(state);

    case action.type === DaffCustomerActionTypes.CustomerLoadFailureAction:
    case action.type === DaffCustomerActionTypes.CustomerUpdateFailureAction:
    case action.type === DaffCustomerActionTypes.CustomerChangeEmailFailureAction:
    case action.type === DaffCustomerActionTypes.CustomerChangePasswordFailureAction:
      return daffOperationFailed([(<DaffCustomerLoadFailure>action).payload], state);

    case action.type === DaffCustomerActionTypes.CustomerClearErrorsAction:
      return daffClearErrors(state);

    default:
      return state;
  }
};
