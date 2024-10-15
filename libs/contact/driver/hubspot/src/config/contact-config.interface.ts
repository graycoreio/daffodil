import { createSingleInjectionToken } from '@daffodil/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const {
  token: DaffContactConfigToken,
  provider: provideDaffContactConfigToken,
} = createSingleInjectionToken<DaffHubspotConfig>('DaffContactConfig');
