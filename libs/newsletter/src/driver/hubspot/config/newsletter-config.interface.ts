import { InjectionToken } from '@angular/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export const DaffNewsletterConfigToken = new InjectionToken<DaffHubspotConfig>('DaffNewsletterConfig')