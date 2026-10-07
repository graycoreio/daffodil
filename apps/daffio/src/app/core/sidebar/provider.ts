import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core';

import { DaffioSidebarRoutingModeService } from './services/sidebar-routing-mode.service';

/**
 * Eagerly instantiates the {@link DaffioSidebarRoutingModeService} so its
 * route-driven open/close effect is active for the lifetime of the app.
 */
export const provideDaffioSidebarFeature = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    provideEnvironmentInitializer(() => {
      inject(DaffioSidebarRoutingModeService);
    }),
  ]);
