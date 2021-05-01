import { daffUriTruncateFileExtension } from '@daffodil/driver';

import { DaffCategoryMagentoDriverConfig } from '../interfaces/public_api';

export const MAGENTO_CATEGORY_CONFIG_DEFAULT: DaffCategoryMagentoDriverConfig = {
  truncateUri: true,
  uriTruncater: daffUriTruncateFileExtension,
};
