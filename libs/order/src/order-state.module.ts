import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffOrderEffects } from './effects/order.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffOrderEffects,
    ]),
  ]
})
export class DaffOrderStateModule { }
