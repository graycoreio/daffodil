import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

import { provideDaffContactHubSpotDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContactHubSpotDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [CommonModule],
})
export class DaffContactHubSpotDriverModule {
  static forRoot(
    config: DaffHubspotConfig,
  ): ModuleWithProviders<DaffContactHubSpotDriverModule> {
    return {
      ngModule: DaffContactHubSpotDriverModule,
      providers: [
        provideDaffContactHubSpotDriver(config),
      ],
    };
  }
}
