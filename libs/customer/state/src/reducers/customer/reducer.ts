import {
  daffClearErrors,
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import {
  DaffCustomerActions,
  DaffCustomerActionTypes,
  DaffCustomerAddressActions,
  DaffCustomerAddressActionTypes,
  DaffCustomerLoadFailure,
  DaffCustomerLoadSuccess,
} from '../../actions/public_api';
import {
  daffCustomerStateStoreAddresses,
  daffCustomerStateStoreCustomer,
} from './adapter';
import { daffCustomerInitialState } from './initial-state';
import { DaffCustomerReducerState } from './interface';

/**
 * The reducer for the customer page state, see {@link DaffCustomerReducerState}.
 */
export const daffCustomerReducer = <T extends DaffCustomer = DaffCustomer>(
  state = daffCustomerInitialState,
  action: DaffCustomerActions<T> | DaffCustomerAddressActions,
): DaffCustomerReducerState<T> => {
  switch (action.type) {
    case DaffCustomerActionTypes.CustomerLoadAction:
      return daffStartResolution(state);

    case DaffCustomerActionTypes.CustomerUpdateAction:
    case DaffCustomerActionTypes.CustomerChangeEmailAction:
    case DaffCustomerActionTypes.CustomerChangePasswordAction:
      return daffStartMutation(state);

    case DaffCustomerActionTypes.CustomerLoadSuccessAction:
    case DaffCustomerActionTypes.CustomerUpdateSuccessAction:
    case DaffCustomerActionTypes.CustomerChangeEmailSuccessAction:
      return daffCustomerStateStoreCustomer((<DaffCustomerLoadSuccess<T>>action).payload, state);

    case DaffCustomerActionTypes.CustomerChangePasswordSuccessAction:
      return daffCompleteOperation(state);

    case DaffCustomerActionTypes.CustomerLoadFailureAction:
    case DaffCustomerActionTypes.CustomerUpdateFailureAction:
    case DaffCustomerActionTypes.CustomerChangeEmailFailureAction:
    case DaffCustomerActionTypes.CustomerChangePasswordFailureAction:
      return daffOperationFailed([(<DaffCustomerLoadFailure>action).payload], state);

    case DaffCustomerActionTypes.CustomerClearErrorsAction:
      return daffClearErrors(state);

    case DaffCustomerAddressActionTypes.AddressDeleteSuccessAction:
    case DaffCustomerAddressActionTypes.AddressAddSuccessAction:
      return daffCustomerStateStoreAddresses(action.payload, state);

    default:
      return state;
  }
};
