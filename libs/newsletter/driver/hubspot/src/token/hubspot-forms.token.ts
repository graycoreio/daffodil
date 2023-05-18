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
  DaffHubspotFormsInterface
} from '@daffodil/driver/hubspot';

import { DaffNewsletterConfigToken } from "@daffodil/newsletter/driver/hubspot";

export const DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN: InjectionToken<DaffHubspotFormsInterface> = new InjectionToken<DaffHubspotFormsInterface>('DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN',
  {
    providedIn: 'root', factory: () => daffHubspotFormsServiceFactory(
      inject(HttpClient),
      inject(DOCUMENT),
      inject(Router),
      inject(Title),
      inject(DaffNewsletterConfigToken),
    ),
  });
