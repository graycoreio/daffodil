import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';
import { provideDaffNewsletterDriver } from '@daffodil/newsletter/driver';

import { provideDaffNewsletterConfigToken } from './config/newsletter-config.interface';
import { DaffNewsletterHubspotService } from './newsletter.service';

/**
 * Provides the HubSpot implementation of the `@daffodil/newsletter/driver` interface.
 */
export const provideDaffNewsletterHubSpotDriver = (
  config: DaffHubspotConfig,
): EnvironmentProviders => makeEnvironmentProviders([
  DaffNewsletterHubspotService,
  provideDaffNewsletterDriver(DaffNewsletterHubspotService),
  provideDaffNewsletterConfigToken(config),
]);
