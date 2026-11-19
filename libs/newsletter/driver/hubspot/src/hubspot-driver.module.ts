import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

import { provideDaffNewsletterHubSpotDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNewsletterHubSpotDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [CommonModule],
})
export class DaffNewsletterHubSpotDriverModule {
  static forRoot(
    config: DaffHubspotConfig,
  ): ModuleWithProviders<DaffNewsletterHubSpotDriverModule> {
    return {
      ngModule: DaffNewsletterHubSpotDriverModule,
      providers: [
        provideDaffNewsletterHubSpotDriver(config),
      ],
    };
  }
}
