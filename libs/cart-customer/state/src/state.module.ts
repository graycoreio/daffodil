import {
  NgModule,
  inject,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { combineReducers } from '@ngrx/store';
import { of } from 'rxjs';

import {
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
  DaffAuthUnauthenticatedHook,
} from '@daffodil/auth/state';
import { DaffCartStorageService } from '@daffodil/cart';
import { daffCartProvideExtraReducers } from '@daffodil/cart/state';

import { DaffCartCustomerAuthEffects } from './effects/auth.effects';
import { daffCartCustomerLoginMutatingReducerMap } from './reducers/login-mutating';
import { daffCartCustomerUnauthenticatedReset } from './reducers/unauthenticated-reset';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffCartCustomerAuthEffects,
    ]),
  ],
  providers: [
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
  ],
})
export class DaffCartCustomerStateModule {}
