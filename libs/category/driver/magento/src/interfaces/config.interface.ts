import { InjectionToken } from '@angular/core';

import { MAGENTO_CATEGORY_CONFIG_DEFAULT } from '../config/default';

/**
 * The token used to provide @daffodil/category/driver/magento config data.
 * Mandatory for the Magento driver.
 */
export const MAGENTO_CATEGORY_CONFIG_TOKEN = new InjectionToken<DaffCategoryMagentoDriverConfig>('MAGENTO_CATEGORY_CONFIG_TOKEN', { factory: () => MAGENTO_CATEGORY_CONFIG_DEFAULT });

/**
 * An interface for providing @daffodil/category/driver/magento with necessary config values.
 */
export interface DaffCategoryMagentoDriverConfig {
  /**
   * Whether or not to attempt to truncate the file extension suffix from the category URI
   * during the {@link DaffMagentoCategoryService#getByUri} call.
   * True by default.
   */
  truncateUri?: boolean;
  /**
   * An optional custom function to truncate the URI.
   * Defaults to capture everything before the last dot: `.`.
   */
  uriTruncater?: (string) => string;
}
