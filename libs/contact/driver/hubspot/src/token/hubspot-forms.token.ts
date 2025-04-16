import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { createSingleInjectionToken } from '@daffodil/core';
import {
  DaffHubspotFormsInterface,
  daffHubspotFormsServiceFactory,
} from '@daffodil/driver/hubspot';

import { DaffContactHubspotConfig } from '../config/contact-config.interface';

export const {
  /**
   * The InjectionToken that holds the Hubspot Forms Service
   * used by the ContactDriver to send submissions to Hubspot.
   */
  token: DAFF_CONTACT_HUBSPOT_FORMS_TOKEN,
  /**
   * Provider function for {@link DAFF_CONTACT_HUBSPOT_FORMS_TOKEN}.
   */
  provider: provideDaffContactHubspotFormsToken,
} = createSingleInjectionToken<DaffHubspotFormsInterface>(
  'DAFF_CONTACT_HUBSPOT_FORMS_TOKEN',
  {
    factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffContactHubspotConfig),
    ),
  },
);
