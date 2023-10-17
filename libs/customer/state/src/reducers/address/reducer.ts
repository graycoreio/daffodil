import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';

import { daffCustomerAddressInitialState } from './initial-state';
import { DaffCustomerAddressReducerState } from './type';
import {
  DaffCustomerAddressActions,
  DaffCustomerAddressActionTypes,
  DaffCustomerAddressLoadFailure,
} from '../../actions/address.actions';

/**
 * The reducer for the customer page state, see {@link DaffCustomerAddressReducerState}.
 */
export const daffCustomerAddressReducer = <T extends DaffCustomerAddress = DaffCustomerAddress>(
  state = daffCustomerAddressInitialState,
  action: DaffCustomerAddressActions<T>,
): DaffCustomerAddressReducerState => {
  switch (true) {
    case action.type === DaffCustomerAddressActionTypes.AddressListAction:
    case action.type === DaffCustomerAddressActionTypes.AddressLoadAction:
      return daffStartResolution(state);

    case action.type === DaffCustomerAddressActionTypes.AddressUpdateAction:
    case action.type === DaffCustomerAddressActionTypes.AddressAddAction:
    case action.type === DaffCustomerAddressActionTypes.AddressDeleteAction:
      return daffStartMutation(state);

    case action.type === DaffCustomerAddressActionTypes.AddressListSuccessAction:
    case action.type === DaffCustomerAddressActionTypes.AddressLoadSuccessAction:
    case action.type === DaffCustomerAddressActionTypes.AddressUpdateSuccessAction:
    case action.type === DaffCustomerAddressActionTypes.AddressAddSuccessAction:
    case action.type === DaffCustomerAddressActionTypes.AddressDeleteSuccessAction:
    case action.type === DaffCustomerAddressActionTypes.AddressUpdateFailureAction:
    case action.type === DaffCustomerAddressActionTypes.AddressAddFailureAction:
    case action.type === DaffCustomerAddressActionTypes.AddressDeleteFailureAction:
      return daffCompleteOperation(state);

    case action.type === DaffCustomerAddressActionTypes.AddressListFailureAction:
    case action.type === DaffCustomerAddressActionTypes.AddressLoadFailureAction:
      return daffOperationFailed([(<DaffCustomerAddressLoadFailure>action).payload], state);

    default:
      return state;
  }
};
