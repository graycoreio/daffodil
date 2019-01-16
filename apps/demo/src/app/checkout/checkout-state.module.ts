import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutEffects } from './effects/checkout.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('foundationCheckout', reducers),
    EffectsModule.forFeature([
      CheckoutEffects
    ])
  ]
})
export class FoundationCheckoutStateModule { }
