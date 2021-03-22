import { InjectionToken } from '@angular/core';

/**
 * The token used to provide @daffodil/product/driver/magento config data.
 * Mandatory for the Magento driver.
 */
export const MAGENTO_PRODUCT_CONFIG_TOKEN = new InjectionToken<DaffProductMagentoDriverConfig>('MAGENTO_PRODUCT_CONFIG_TOKEN');

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
