import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  daffCustomerProvideExtraReducers,
  DaffCustomerStateModule,
} from '@daffodil/customer/state';

import { daffCustomerAuthReducerMap } from './reducers/public_api';

/**
 * @deprecated in favor of {@link provideDaffCustomerAuthState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffCustomerStateModule,
  ],
  providers: [
    ...daffCustomerProvideExtraReducers(combineReducers(daffCustomerAuthReducerMap)),
  ],
})
export class DaffCustomerAuthStateModule {}
