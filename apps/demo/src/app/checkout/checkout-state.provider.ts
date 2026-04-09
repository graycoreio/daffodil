import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CheckoutEffects } from './effects/checkout.effects';

export const provideDemoCheckoutState = () =>
  importProvidersFrom(EffectsModule.forFeature([CheckoutEffects]));
