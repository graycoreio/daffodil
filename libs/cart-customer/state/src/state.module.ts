import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffCartCustomerAuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffCartCustomerAuthEffects,
    ]),
  ],
})
export class DaffCartCustomerStateModule {}
