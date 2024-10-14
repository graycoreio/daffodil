import { createSingleInjectionToken } from '@daffodil/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const {
  token: DaffContactConfigToken,
  provider: daffProvideContactConfigToken,
} = createSingleInjectionToken<DaffHubspotConfig>('DaffContactConfig');
