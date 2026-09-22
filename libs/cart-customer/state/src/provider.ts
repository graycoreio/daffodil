import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { combineReducers } from '@ngrx/store';
import { of } from 'rxjs';

import {
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
  DaffAuthUnauthenticatedHook,
} from '@daffodil/auth/state';
import { DaffCartStorageService } from '@daffodil/cart';
import { daffCartProvideExtraReducers } from '@daffodil/cart/state';

import { DaffCartCustomerAuthEffects } from './effects/auth.effects';
import { DaffCartCustomerUnauthorizedEffects } from './effects/unauthorized.effects';
import { daffCartCustomerLoginMutatingReducerMap } from './reducers/login-mutating';
import { daffCartCustomerUnauthenticatedReset } from './reducers/unauthenticated-reset';

/**
 * Provides the `@daffodil/cart-customer/state` effects, cart extra reducers, and auth unauthenticated hook.
 */
export const provideDaffCartCustomerState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(
    DaffCartCustomerAuthEffects,
    DaffCartCustomerUnauthorizedEffects,
  ),
  {
    provide: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
    useFactory: () => {
      const storage = inject(DaffCartStorageService);
      const hook: DaffAuthUnauthenticatedHook = () => {
        try {
          return of(storage.removeCartId());
        } catch {
          return of(null);
        }
      };

      return hook;
    },
    multi: true,
  },
  daffCartProvideExtraReducers(
    daffCartCustomerUnauthenticatedReset,
    combineReducers(daffCartCustomerLoginMutatingReducerMap),
  ),
]);
