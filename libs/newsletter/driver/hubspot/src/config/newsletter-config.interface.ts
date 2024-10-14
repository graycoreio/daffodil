import { createSingleInjectionToken } from '@daffodil/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const {
  token: DaffNewsletterConfigToken,
  provider: daffProvideNewsletterConfigToken,
} = createSingleInjectionToken<DaffHubspotConfig>('DaffNewsletterConfig');
