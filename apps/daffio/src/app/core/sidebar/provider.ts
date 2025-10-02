import {
  EnvironmentProviders,
  importProvidersFrom,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffioSidebarRoutingModeEffects } from './effects/sidebar-routing-mode.effects';

export const provideDaffioSidebarFeature = (): EnvironmentProviders[] => [
  importProvidersFrom(EffectsModule.forFeature([DaffioSidebarRoutingModeEffects])),
];
