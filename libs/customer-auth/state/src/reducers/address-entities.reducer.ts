import {
  DaffAuthActions,
  DaffAuthActionTypes,
  DaffAuthLoginActions,
  DaffAuthLoginActionTypes,
} from '@daffodil/auth/state';
import { DaffOperationEntityState } from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';
import { daffCustomerAddressEntitiesAdapter } from '@daffodil/customer/state';

export function daffCustomerAuthResetAddressEntitiesAfterLogoutReducer(state: DaffOperationEntityState<DaffCustomerAddress>, action: DaffAuthActions | DaffAuthLoginActions): DaffOperationEntityState<DaffCustomerAddress> {
  return action.type === DaffAuthActionTypes.AuthCheckFailureAction || action.type === DaffAuthActionTypes.AuthGuardLogoutAction || action.type === DaffAuthLoginActionTypes.LogoutSuccessAction ? daffCustomerAddressEntitiesAdapter().getInitialState() : state;
}
