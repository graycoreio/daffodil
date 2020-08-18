import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { daffAuthorizeNetReducers } from './reducers/authorize-net.reducers';
import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';

@NgModule({
  imports: [
		StoreModule.forFeature('authorizenet', daffAuthorizeNetReducers),
    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
  ]
})
export class DaffAuthorizeNetStateModule { }
