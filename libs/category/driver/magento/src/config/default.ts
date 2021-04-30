import { DAFF_TRUNCATE_FILE_EXTENSION_REGEX } from '@daffodil/driver';

import { DaffCategoryMagentoDriverConfig } from '../interfaces/public_api';

export const MAGENTO_CATEGORY_CONFIG_DEFAULT: DaffCategoryMagentoDriverConfig = {
  truncateUri: true,
  truncatedUriMatcher: DAFF_TRUNCATE_FILE_EXTENSION_REGEX,
};
