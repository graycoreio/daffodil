import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffDevToolsConfigService } from '@daffodil/dev-tools';
import { DaffShopifyDriverConfig } from '@daffodil/driver/shopify';

export const DEMO_SHOPIFY_ENDPOINT_SWITCH = new InjectionToken<DaffShopifyDriverConfig>('DEMO_SHOPIFY_ENDPOINT_SWITCH', {
  factory: () => {
    const devTools = inject(DaffDevToolsConfigService);

    const endpoint = '';
    const accessToken = '';

    return {
      domain: () => devTools.getStoredDriverConfiguration('@daffodil/driver','shopify')?.['endpoint'] ?? endpoint,
      accessToken: () => devTools.getStoredDriverConfiguration('@daffodil/driver','shopify')?.['access_token'] ?? accessToken,
    };
  },
  providedIn: 'root',
});
