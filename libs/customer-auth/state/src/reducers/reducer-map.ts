import { ActionReducerMap } from '@ngrx/store';

import {
  DaffAuthActions,
  DaffAuthActionTypes,
} from '@daffodil/auth/state';
import {
  daffCustomerInitialState,
  DaffCustomerReducersState,
} from '@daffodil/customer/state';

export const daffCustomerAuthReducerMap: ActionReducerMap<DaffCustomerReducersState, DaffAuthActions> = {
  customer: (state, action) => action.type === DaffAuthActionTypes.AuthRevokeAction ? daffCustomerInitialState : state,
};
