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
   * Whether or not to attempt to truncate the category URL
   * during the {@link DaffMagentoCategoryService#getByUrl} call.
   * True by default.
   */
  truncateUrl?: boolean;
  /**
   * An optional custom function to truncate the URL.
   * Defaults to truncate leading slash, file extension, query params, and fragments.
   */
  uriTruncationStrategy?: (string) => string;
}
