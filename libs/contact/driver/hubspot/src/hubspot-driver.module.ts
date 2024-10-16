import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactDriver } from '@daffodil/contact/driver';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

import { provideDaffContactConfigToken } from './config/contact-config.interface';
import { DaffContactHubspotService } from './contact.service';

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
        provideDaffContactDriver(DaffContactHubspotService),
        provideDaffContactConfigToken(config),
      ],
    };
  }
}
