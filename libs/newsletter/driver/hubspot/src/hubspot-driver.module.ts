import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

import { provideDaffNewsletterHubSpotDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNewsletterHubSpotDriver}
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
