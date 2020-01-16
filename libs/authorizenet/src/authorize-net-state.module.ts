import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authorizeNetReducers } from './reducers/authorize-net.reducers';
import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';

@NgModule({
  imports: [
		StoreModule.forFeature('authorizeNet', authorizeNetReducers),
    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
  ]
})
export class DaffAuthorizeNetStateModule { }
