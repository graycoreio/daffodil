import { ActionReducerMap } from '@ngrx/store';

import { DaffAuthActions } from '@daffodil/auth/state';
import { daffIdentityReducer } from '@daffodil/core/state';
import { DaffCustomerReducersState } from '@daffodil/customer/state';

import { daffCustomerAuthResetAddressEntitiesAfterLogoutReducer } from './address-entities.reducer';
import { daffCustomerAuthResetAfterLogoutReducer } from './customer.reducer';

export const daffCustomerAuthReducerMap: ActionReducerMap<DaffCustomerReducersState, DaffAuthActions> = {
  customer: daffCustomerAuthResetAfterLogoutReducer,
  address: daffIdentityReducer,
  addressEntities: daffCustomerAuthResetAddressEntitiesAfterLogoutReducer,
};
