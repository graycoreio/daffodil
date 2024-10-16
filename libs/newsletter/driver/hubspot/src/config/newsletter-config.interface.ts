import { createSingleInjectionToken } from '@daffodil/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const {
  token: DaffNewsletterConfigToken,
  /**
   * Provider function for {@link DaffNewsletterConfigToken}.
   */
  provider: provideDaffNewsletterConfigToken,
} = createSingleInjectionToken<DaffHubspotConfig>('DaffNewsletterConfig');
