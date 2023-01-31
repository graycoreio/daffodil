import {
  DaffAuthActions,
  DaffAuthActionTypes,
} from '@daffodil/auth/state';
import {
  daffCustomerInitialState,
  DaffCustomerReducerState,
} from '@daffodil/customer/state';

export function daffCustomerAuthResetAfterLogoutReducer(state: DaffCustomerReducerState, action: DaffAuthActions): DaffCustomerReducerState {
  return action.type === DaffAuthActionTypes.AuthRevokeAction ? daffCustomerInitialState : state;
}
