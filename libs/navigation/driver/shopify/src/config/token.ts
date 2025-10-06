import { createConfigInjectionToken } from '@daffodil/core';

import { SHOPIFY_NAVIGATION_DRIVER_CONFIG_DEFAULT } from './default';
import { ShopifyNavigationDriverConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/navigation/driver/shopify config data.
   */
  token: SHOPIFY_NAVIGATION_DRIVER_CONFIG,
  /**
   * Provider function for {@link SHOPIFY_NAVIGATION_DRIVER_CONFIG}.
   */
  provider: provideShopifyNavigationDriverConfig,
} = createConfigInjectionToken<ShopifyNavigationDriverConfig>(
  SHOPIFY_NAVIGATION_DRIVER_CONFIG_DEFAULT,
  'SHOPIFY_NAVIGATION_DRIVER_CONFIG',
);
