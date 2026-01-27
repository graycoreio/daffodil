import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DemoAuthEffects } from './effects/auth.effects';

export const provideDemoAuthState = () => [
  importProvidersFrom(EffectsModule.forFeature([DemoAuthEffects])),
];
