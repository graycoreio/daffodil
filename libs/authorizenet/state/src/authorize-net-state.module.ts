import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';
import { daffAuthorizeNetReducers } from './reducers/authorize-net.reducers';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from './reducers/authorizenet-store-feature-key';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, daffAuthorizeNetReducers),
    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
  ],
})
export class DaffAuthorizeNetStateModule { }
