import {
  NgModule,
  inject,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { combineReducers } from '@ngrx/store';

import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from '@daffodil/auth/state';
import { DaffCartStorageService } from '@daffodil/cart';
import { daffCartProvideExtraReducers } from '@daffodil/cart/state';

import { DaffCartCustomerAuthEffects } from './effects/auth.effects';
import { daffCartCustomerLoginMutatingReducerMap } from './reducers/login-mutating';

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
        return () => {
          try {
            storage.removeCartId();
          } catch {}
        };
      },
      multi: true,
    },
    daffCartProvideExtraReducers(
      combineReducers(daffCartCustomerLoginMutatingReducerMap),
    ),
  ],
})
export class DaffCartCustomerStateModule {}
