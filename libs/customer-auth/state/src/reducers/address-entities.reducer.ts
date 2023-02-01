import {
  DaffAuthActions,
  DaffAuthActionTypes,
} from '@daffodil/auth/state';
import { DaffOperationEntityState } from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';
import { daffCustomerAddressEntitiesAdapter } from '@daffodil/customer/state';

export function daffCustomerAuthResetAddressEntitiesAfterLogoutReducer(state: DaffOperationEntityState<DaffCustomerAddress>, action: DaffAuthActions): DaffOperationEntityState<DaffCustomerAddress> {
  return action.type === DaffAuthActionTypes.AuthRevokeAction ? daffCustomerAddressEntitiesAdapter().getInitialState() : state;
}
