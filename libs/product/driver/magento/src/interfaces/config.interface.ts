import { InjectionToken } from '@angular/core';

import { MAGENTO_PRODUCT_CONFIG_DEFAULT } from '../config/default';

/**
 * The token used to provide @daffodil/product/driver/magento config data.
 * Mandatory for the Magento driver.
 */
export const MAGENTO_PRODUCT_CONFIG_TOKEN = new InjectionToken<DaffProductMagentoDriverConfig>('MAGENTO_PRODUCT_CONFIG_TOKEN', { factory: () => MAGENTO_PRODUCT_CONFIG_DEFAULT });

/**
 * An interface for providing @daffodil/product/driver/magento with necessary config values.
 */
export interface DaffProductMagentoDriverConfig {
  /**
   * The fully-qualified base URL for media assets, such as product images.
   * e.g. https://api.daff.io/media/
   */
  baseMediaUrl: string;
  /**
   * Whether or not to attempt to truncate the product URL
   * during the {@link DaffMagentoProductService#getByUrl} call.
   * True by default.
   */
  truncateUrl?: boolean;
  /**
   * An optional custom function to truncate the URL.
   * Defaults to truncate leading path segments, file extension, query params, and fragments.
   */
  urlTruncationStrategy?: (string) => string;
}
