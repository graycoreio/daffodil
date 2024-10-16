import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { createSingleInjectionToken } from '@daffodil/core';
import {
  DaffHubspotFormsService,
  daffHubspotFormsServiceFactory,
} from '@daffodil/driver/hubspot';

import { DaffNewsletterConfigToken } from '../config/newsletter-config.interface';

export const {
  token: DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN,
  /**
   * Provider function for {@link DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN}.
   */
  provider: provideDaffNewsletterHubspotFormsToken,
} = createSingleInjectionToken<DaffHubspotFormsService>(
  'DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN',
  {
    providedIn: 'root',
    factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffNewsletterConfigToken),
    ),
  },
);
