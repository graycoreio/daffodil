import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffPaypalEffects } from './effects/paypal.effects';
import { daffPaypalReducers } from './reducers/paypal-reducers';
import { DAFF_PAYPAL_STORE_FEATURE_KEY } from './reducers/paypal-store-feature-key';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_PAYPAL_STORE_FEATURE_KEY, daffPaypalReducers),
    EffectsModule.forFeature([DaffPaypalEffects]),
  ],
})
export class DaffPaypalStateModule {}
