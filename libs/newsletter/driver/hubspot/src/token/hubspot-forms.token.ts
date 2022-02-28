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

import { DaffNewsletterConfigToken } from '../config/newsletter-config.interface';

export const DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN = new InjectionToken<DaffHubspotFormsService>('DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN',
  {
    providedIn: 'root', factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffNewsletterConfigToken),
    ),
  });
