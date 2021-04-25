import { DaffCategoryMagentoDriverConfig } from '../interfaces/public_api';

export const MAGENTO_CATEGORY_URI_TRUNCATION_REGEX = /(?<uri>.*)\.(.*)$/;

export const MAGENTO_CATEGORY_CONFIG_DEFAULT: DaffCategoryMagentoDriverConfig = {
  truncateUri: true,
  truncatedUriMatcher: MAGENTO_CATEGORY_URI_TRUNCATION_REGEX,
};
