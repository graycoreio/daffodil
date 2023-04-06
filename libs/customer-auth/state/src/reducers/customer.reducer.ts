import {
  DaffAuthActions,
  DaffAuthActionTypes,
  DaffAuthLoginActions,
  DaffAuthLoginActionTypes,
} from '@daffodil/auth/state';
import {
  daffCustomerInitialState,
  DaffCustomerReducerState,
} from '@daffodil/customer/state';

export function daffCustomerAuthResetAfterLogoutReducer(state: DaffCustomerReducerState, action: DaffAuthActions | DaffAuthLoginActions): DaffCustomerReducerState {
  return action.type === DaffAuthActionTypes.AuthCheckFailureAction || action.type === DaffAuthActionTypes.AuthGuardLogoutAction || action.type === DaffAuthLoginActionTypes.LogoutSuccessAction ? daffCustomerInitialState : state;
}
