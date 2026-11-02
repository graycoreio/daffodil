import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

import { provideDaffContactHubSpotDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContactHubSpotDriver}
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
