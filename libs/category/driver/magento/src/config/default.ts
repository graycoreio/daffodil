import { MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX } from '@daffodil/driver/magento';

import { DaffCategoryMagentoDriverConfig } from '../interfaces/public_api';

export const MAGENTO_CATEGORY_CONFIG_DEFAULT: DaffCategoryMagentoDriverConfig = {
  truncateUri: true,
  truncatedUriMatcher: MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX,
};
