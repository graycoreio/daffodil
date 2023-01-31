import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  daffCustomerProvideExtraReducers,
  DaffCustomerStateModule,
} from '@daffodil/customer/state';

import { daffCustomerAuthReducerMap } from './reducers/public_api';

@NgModule({
  imports: [
    DaffCustomerStateModule,
  ],
  providers: [
    ...daffCustomerProvideExtraReducers(combineReducers(daffCustomerAuthReducerMap)),
  ],
})
export class DaffCustomerAuthStateModule {}
