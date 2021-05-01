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
   * Whether or not to attempt to truncate the file extension suffix and leading path segments
   * from the product URI during the {@link DaffMagentoProductService#getByUrl} call.
   * True by default.
   */
  truncateUri?: boolean;
  /**
   * An optional custom function to truncate the URI.
   * Defaults to capture everything before the last dot: `.`.
   */
  uriTruncationStrategy?: (string) => string;
}
