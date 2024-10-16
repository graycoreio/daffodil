import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';
import { provideDaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { provideDaffNewsletterConfigToken } from './config/newsletter-config.interface';
import { DaffNewsletterHubspotService } from './newsletter.service';

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
        provideDaffNewsletterDriver(DaffNewsletterHubspotService),
        provideDaffNewsletterConfigToken(config),
      ],
    };
  }
}
