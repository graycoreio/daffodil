import { InjectionToken } from '@angular/core';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

export interface DaffContactConfig extends DaffHubspotConfig{}

export const DaffContactConfigToken = new InjectionToken<DaffContactConfig>('DaffContactConfig');