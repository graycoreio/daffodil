import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DaffPaypalEffects } from './effects/paypal.effects';
import { daffPaypalReducers } from './reducers/paypal-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('paypal', daffPaypalReducers),
    EffectsModule.forFeature([DaffPaypalEffects])
  ]
})
export class DaffPaypalStateModule {}
