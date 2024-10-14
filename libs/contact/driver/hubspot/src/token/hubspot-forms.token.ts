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

import { DaffContactConfigToken } from '../config/contact-config.interface';

export const {
  token: DAFF_CONTACT_HUBSPOT_FORMS_TOKEN,
  provider: daffProvideContactHubspotFormsToken,
} = createSingleInjectionToken<DaffHubspotFormsService>(
  'DAFF_CONTACT_HUBSPOT_FORMS_TOKEN',
  {
    providedIn: 'root',
    factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffContactConfigToken),
    ),
  },
);
