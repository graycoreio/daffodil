import { createConfigInjectionToken } from '@daffodil/core';

import { MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT } from './default';
import { MagentoNavigationDriverConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/navigation/driver/magento config data.
   */
  token: MAGENTO_NAVIGATION_DRIVER_CONFIG,
  /**
   * Provider function for {@link MAGENTO_NAVIGATION_DRIVER_CONFIG}.
   */
  provider: provideMagentoNavigationDriverConfig,
} = createConfigInjectionToken<MagentoNavigationDriverConfig>(
  MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT,
  'MAGENTO_NAVIGATION_DRIVER_CONFIG',
);
