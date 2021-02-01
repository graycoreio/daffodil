import {
  CommonModule,
  DOCUMENT,
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { DaffContactDriver } from '@daffodil/contact/driver';
import {
  DaffHubspotFormsService,
  daffHubspotFormsServiceFactory,
  DaffHubspotConfig,
} from '@daffodil/driver/hubspot';

import { DaffContactConfigToken } from './config/contact-config.interface';
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
        { provide: DaffContactDriver, useClass: DaffContactHubspotService },
        { provide: DaffContactConfigToken, useValue: config },
        {
          provide: DaffHubspotFormsService,
          useFactory: daffHubspotFormsServiceFactory,
          deps: [HttpClient, DOCUMENT, Router, Title, DaffContactConfigToken],
        },
      ],
    };
  }
}
