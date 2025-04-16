import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { createSingleInjectionToken } from '@daffodil/core';
import {
  daffHubspotFormsServiceFactory,
  DaffHubspotFormsInterface,
} from '@daffodil/driver/hubspot';

import { DaffNewsletterConfigToken } from '../config/newsletter-config.interface';

export const {
  /**
   * The InjectionToken that holds the Hubspot Forms Service
   * used by the HubspotDriver to send submissions to Hubspot.
   */
  token: DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN,
  /**
   * Provider function for {@link DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN}.
   */
  provider: provideDaffNewsletterHubspotFormsToken,
} = createSingleInjectionToken<DaffHubspotFormsInterface>(
  'DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN',
  {
    factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffNewsletterConfigToken),
    ),
  },
);
