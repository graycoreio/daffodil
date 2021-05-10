import { DaffCategoryMagentoDriverConfig } from '../interfaces/public_api';
import { magentoCategoryTruncateUrl } from '../transformers/truncate-url';

export const MAGENTO_CATEGORY_CONFIG_DEFAULT: DaffCategoryMagentoDriverConfig = {
  truncateUrl: true,
  uriTruncationStrategy: magentoCategoryTruncateUrl,
};
