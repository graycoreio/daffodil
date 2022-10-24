import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffAuthEffects } from './effects/auth.effects';
import { DaffAuthLoginEffects } from './effects/login.effects';
import { DaffAuthRegisterEffects } from './effects/register.effects';
import { DaffAuthResetPasswordEffects } from './effects/reset-password.effects';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
    EffectsModule.forFeature([
      DaffAuthEffects,
      DaffAuthLoginEffects,
      DaffAuthRegisterEffects,
      DaffAuthResetPasswordEffects,
    ]),
  ],
})
export class DaffAuthStateModule {}
