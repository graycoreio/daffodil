import { createConfigInjectionToken } from '@daffodil/core';

import { MAGENTO_PRODUCT_CONFIG_DEFAULT } from '../config/default';

export const {
  /**
   * The token used to provide @daffodil/product/driver/magento config data.
   * Mandatory for the Magento driver.
   */
  token: MAGENTO_PRODUCT_CONFIG_TOKEN,
  /**
   * Provider function for {@link MAGENTO_PRODUCT_CONFIG_TOKEN}.
   */
  provider: provideMagentoProductConfig,
} = createConfigInjectionToken<DaffProductMagentoDriverConfig>(
  MAGENTO_PRODUCT_CONFIG_DEFAULT,
  'MAGENTO_PRODUCT_CONFIG_TOKEN',
);

/**
 * An interface for providing @daffodil/product/driver/magento with necessary config values.
 */
export interface DaffProductMagentoDriverConfig {
  /**
   * The fully-qualified base URL for media assets, such as product images.
   * e.g. https://api.daff.io/media/
   */
  baseMediaUrl: string;
}
