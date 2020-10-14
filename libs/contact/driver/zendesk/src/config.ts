import { InjectionToken } from '@angular/core';

export interface DaffContactZendeskConfig {
  subdomain: string;
}
export const DaffContactZendeskConfigToken = new InjectionToken<DaffContactZendeskConfig>(
  'DaffContactZendeskConfigToken'
);
