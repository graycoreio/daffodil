import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducers } from './reducers/auth-reducers';
import { DaffAuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([DaffAuthEffects]),
  ]
})
export class DaffAuthStateModule { }
