import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { DaffHubspotFormsService } from './hubspot-forms.service';
import { DaffHubspotConfig } from './models/config';
import { DaffHubspotFormsInterface } from './models/forms';

/**
 * Factory for {@link DaffHubspotFormsService}.
 */
export const daffHubspotFormsServiceFactory = (
  http: HttpClient,
  document: Document,
  router: Router,
  title: Title,
  config: DaffHubspotConfig,
): DaffHubspotFormsInterface => new DaffHubspotFormsService(http, document, router, title, config);
