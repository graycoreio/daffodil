import { MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX } from '@daffodil/driver/magento';

import { DaffProductMagentoDriverConfig } from '../interfaces/public_api';

export const MAGENTO_PRODUCT_URI_TRUNCATION_REGEX = /(?<uri>.*)\.(.*)$/;

export const MAGENTO_PRODUCT_CONFIG_DEFAULT: DaffProductMagentoDriverConfig = {
  baseMediaUrl: '',
  truncateUri: true,
  truncatedUriMatcher: MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX,
};
