import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffDevToolsConfigService } from '@daffodil/dev-tools';
import { DaffMagentoDriverConfig } from '@daffodil/driver/magento';

export const DEMO_MAGENTO_DRIVER_CONFIG = new InjectionToken<DaffMagentoDriverConfig>('DEMO_MAGENTO_DRIVER_CONFIG', {
  factory: () => {
    const devTools = inject(DaffDevToolsConfigService);

    return {
      uri: () => devTools.getStoredDriverConfiguration('@daffodil/driver','magento')?.['baseUrl'] ?? '',
    };
  },
  providedIn: 'root',
});
