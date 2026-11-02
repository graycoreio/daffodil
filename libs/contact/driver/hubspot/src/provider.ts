import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffContactDriver } from '@daffodil/contact/driver';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

import { provideDaffContactHubspotConfig } from './config/contact-config.interface';
import { DaffContactHubspotService } from './contact.service';

/**
 * Provides the HubSpot implementation of the `@daffodil/contact/driver` interface.
 */
export const provideDaffContactHubSpotDriver = (
  config: DaffHubspotConfig,
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffContactDriver(DaffContactHubspotService),
  provideDaffContactHubspotConfig(config),
]);
