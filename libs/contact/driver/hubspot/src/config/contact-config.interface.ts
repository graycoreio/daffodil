import { InjectionToken } from '@angular/core';

import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

/**
 * The injection token that holds the configuration of the hubspot contact driver.
 */
export const DaffContactConfigToken = new InjectionToken<DaffHubspotConfig>(
  'DaffContactConfig',
);
