import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CheckoutEffects } from './effects/checkout.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      CheckoutEffects,
    ]),
  ],
})
export class DemoCheckoutStateModule { }
