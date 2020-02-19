import { InjectionToken } from '@angular/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';


export const DaffContactConfigToken = new InjectionToken<DaffHubspotConfig>('DaffContactConfig');