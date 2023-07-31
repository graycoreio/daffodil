import {
  ModuleWithProviders,
  NgModule,
  inject,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';

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
import { DAFF_AUTH_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_AUTH_REDUCERS } from './reducers/token/reducers.token';


@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, DAFF_AUTH_REDUCERS),
    EffectsModule.forFeature([
      DaffAuthEffects,
      DaffAuthLoginEffects,
      DaffAuthRegisterEffects,
      DaffAuthResetPasswordEffects,
    ]),
  ],
  providers: [
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
  ],
})
export class DaffAuthStateModule {
  static withConfig(config: Partial<DaffAuthStateConfig> = {}): ModuleWithProviders<DaffAuthStateModule> {
    return {
      ngModule: DaffAuthStateModule,
      providers: [
        provideDaffAuthStateConfig({
          ...daffAuthStateDefaultConfig,
          ...config,
        }),
      ],
    };
  }
}
