import { InjectionToken } from '@angular/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export interface DaffNewsletterConfig extends DaffHubspotConfig{};
export const DaffNewsletterConfigToken = new InjectionToken<DaffNewsletterConfig>('DaffNewsletterConfig')