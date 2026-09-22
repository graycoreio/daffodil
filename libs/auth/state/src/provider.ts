import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import {
  combineReducers,
  provideState,
} from '@ngrx/store';
import { of } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import { daffComposeReducers } from '@daffodil/core/state';

import {
  DaffAuthStateConfig,
  daffAuthStateDefaultConfig,
  provideDaffAuthStateConfig,
} from './config/public_api';
import { DaffAuthEffects } from './effects/auth.effects';
import { DaffAuthLoginEffects } from './effects/login.effects';
import { DaffAuthRegisterEffects } from './effects/register.effects';
import { DaffAuthResetPasswordEffects } from './effects/reset-password.effects';
import {
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
  DaffAuthUnauthenticatedHook,
} from './injection-tokens/public_api';
import { daffAuthReducers } from './reducers/auth-reducers';
import { DAFF_AUTH_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_AUTH_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_AUTH_REDUCERS,
  provideDaffAuthReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/auth/state` feature state and effects.
 */
export const provideDaffAuthState = (config: Partial<DaffAuthStateConfig> = {}): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_AUTH_STORE_FEATURE_KEY, DAFF_AUTH_REDUCERS),
  provideEffects(
    DaffAuthEffects,
    DaffAuthLoginEffects,
    DaffAuthRegisterEffects,
    DaffAuthResetPasswordEffects,
  ),
  {
    provide: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
    useFactory: () => {
      const storage = inject(DaffAuthStorageService);
      const hook: DaffAuthUnauthenticatedHook = () => {
        try {
          return of(storage.removeAuthToken());
        } catch {
          return of(null);
        }
      };

      return hook;
    },
    multi: true,
  },
  provideDaffAuthReducersFactory(() => daffComposeReducers([
    combineReducers(daffAuthReducers),
    ...inject(DAFF_AUTH_EXTRA_REDUCERS),
  ])),
  provideDaffAuthStateConfig({
    ...daffAuthStateDefaultConfig,
    ...config,
  }),
]);
