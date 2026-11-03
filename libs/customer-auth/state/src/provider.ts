import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  daffCustomerProvideExtraReducers,
  provideDaffCustomerState,
} from '@daffodil/customer/state';

import { daffCustomerAuthReducerMap } from './reducers/public_api';

/**
 * Provides the `@daffodil/customer-auth/state` extra reducers for the customer state.
 * Includes {@link provideDaffCustomerState}.
 */
export const provideDaffCustomerAuthState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerState(),
  ...daffCustomerProvideExtraReducers(combineReducers(daffCustomerAuthReducerMap)),
]);
