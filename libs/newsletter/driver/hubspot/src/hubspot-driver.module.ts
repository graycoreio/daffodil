import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';
import { DaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { DaffNewsletterConfigToken } from './config/newsletter-config.interface';
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
        {
          provide: DaffNewsletterDriver,
          useClass: DaffNewsletterHubspotService,
        },
        {
          provide: DaffNewsletterConfigToken,
          useValue: config,
        },
      ],
    };
  }
}
