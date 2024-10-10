import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  inject,
  InjectionToken,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {
  daffHubspotFormsServiceFactory,
  DaffHubspotFormsInterface,
} from '@daffodil/driver/hubspot';

import { DaffNewsletterConfigToken } from '../config/newsletter-config.interface';

/**
 * The InjectionToken that holds the Hubspot Forms Service
 * used by the HubspotDriver to send submissions to Hubspot.
 */
export const DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN = new InjectionToken<DaffHubspotFormsInterface>('DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN',
  {
    providedIn: 'root', factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffNewsletterConfigToken),
    ),
  });
