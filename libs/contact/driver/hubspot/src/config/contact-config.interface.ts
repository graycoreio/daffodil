import { createConfigInjectionToken } from '@daffodil/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const {
  /**
   * The injection token that holds the configuration of the hubspot contact driver.
   */
  token: DaffContactHubspotConfig,
  provider: provideDaffContactHubspotConfig,
} = createConfigInjectionToken<DaffHubspotConfig>(null, 'DaffContactHubspotConfig');
