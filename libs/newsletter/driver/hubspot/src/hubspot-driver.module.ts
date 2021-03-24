import {
  CommonModule,
  DOCUMENT,
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {
  DaffHubspotConfig,
  DaffHubspotFormsService,
  daffHubspotFormsServiceFactory,
} from '@daffodil/driver/hubspot';
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
        {
          provide: DaffHubspotFormsService,
          useFactory: daffHubspotFormsServiceFactory,
          deps: [
            HttpClient,
            DOCUMENT,
            Router,
            Title,
            DaffNewsletterConfigToken,
          ],
        },
      ],
    };
  }
}
