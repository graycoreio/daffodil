import { DaffOperationEntityState } from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';

import {
  DaffCustomerAddressActions,
  DaffCustomerAddressActionTypes,
} from '../../actions/address.actions';
import {
  DaffCustomerActions,
  DaffCustomerActionTypes,
} from '../../actions/customer.actions';
import { daffCustomerAddressEntitiesAdapter } from './adapter';


/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action CartItemGrid, BestSellers, or CartItem actions
 * @returns CartItem entities state
 */
export function daffCustomerAddressEntitiesReducer<
  T extends DaffCustomerAddress = DaffCustomerAddress,
>(
  state = daffCustomerAddressEntitiesAdapter<T>().getInitialState(),
  action: DaffCustomerAddressActions<T> | DaffCustomerActions): DaffOperationEntityState<T> {
  const adapter = daffCustomerAddressEntitiesAdapter<T>();
  switch (action.type) {
    case DaffCustomerAddressActionTypes.AddressLoadAction:
      return adapter.preload(
        action.addressId,
        state,
      );

    case DaffCustomerAddressActionTypes.AddressAddAction:
      return adapter.preadd(
        action.address,
        state,
        action.placeholderId,
      );

    case DaffCustomerAddressActionTypes.AddressDeleteAction:
      return adapter.preremove(
        action.addressId,
        state,
      );

    case DaffCustomerAddressActionTypes.AddressUpdateAction:
      return adapter.preupdate(
        action.address,
        state,
      );

    case DaffCustomerAddressActionTypes.AddressLoadSuccessAction:
      return adapter.load(
        action.payload,
        state,
      );

    case DaffCustomerAddressActionTypes.AddressListSuccessAction:
      return adapter.list(
        action.payload,
        state,
      );

    case DaffCustomerActionTypes.CustomerChangeEmailSuccessAction:
    case DaffCustomerActionTypes.CustomerUpdateSuccessAction:
    case DaffCustomerActionTypes.CustomerLoadSuccessAction:
      return adapter.list(
        <T[]>action.payload.addresses,
        state,
      );

    case DaffCustomerAddressActionTypes.AddressUpdateSuccessAction:
    case DaffCustomerAddressActionTypes.AddressDeleteSuccessAction:
    case DaffCustomerAddressActionTypes.AddressAddSuccessAction:
      return adapter.list(
        <T[]>action.payload,
        state,
      );

    case DaffCustomerAddressActionTypes.AddressDeleteFailureAction:
    case DaffCustomerAddressActionTypes.AddressAddFailureAction:
    case DaffCustomerAddressActionTypes.AddressLoadFailureAction:
    case DaffCustomerAddressActionTypes.AddressUpdateFailureAction:
      return adapter.operationFailed(
        action.id,
        [action.payload],
        state,
      );

    default:
      return state;
  }
}
