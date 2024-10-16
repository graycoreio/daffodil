import { createSingleInjectionToken } from '@daffodil/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const {
  token: DaffContactConfigToken,
  /**
   * Provider function for {@link DaffContactConfigToken}.
   */
  provider: provideDaffContactConfigToken,
} = createSingleInjectionToken<DaffHubspotConfig>('DaffContactConfig');
