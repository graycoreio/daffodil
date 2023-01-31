import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthActions } from '@daffodil/auth/state';
import { DaffCustomerReducersState } from '@daffodil/customer/state';

import { daffCustomerAuthResetAfterLogoutReducer } from './customer.reducer';

export const daffCustomerAuthReducerMap: ActionReducerMap<DaffCustomerReducersState, DaffAuthActions> = {
  customer: daffCustomerAuthResetAfterLogoutReducer,
};
