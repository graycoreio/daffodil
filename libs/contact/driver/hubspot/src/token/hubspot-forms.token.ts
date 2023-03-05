import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  inject,
  InjectionToken,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {
  DaffHubspotFormsService,
  daffHubspotFormsServiceFactory,
} from '@daffodil/driver/hubspot';

import { DaffContactConfigToken } from '../config/contact-config.interface';
import { DaffContactHubSpotDriverModule } from '../hubspot-driver.module';

/**
 * The InjectionToken that holds the Hubspot Forms Service
 * used by the ContactDriver to send submissions to Hubspot.
 */
export const DAFF_CONTACT_HUBSPOT_FORMS_TOKEN = new InjectionToken<DaffHubspotFormsService>('DAFF_CONTACT_HUBSPOT_FORMS_TOKEN',
  {
    providedIn: DaffContactHubSpotDriverModule,
    factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffContactConfigToken),
    ),
  });
