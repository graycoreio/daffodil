import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffAuthEffects } from './effects/auth.effects';
import {
  DAFF_AUTH_STORE_FEATURE_KEY,
  daffAuthReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
    EffectsModule.forFeature([DaffAuthEffects]),
  ],
})
export class DaffAuthStateModule {}
