import { DaffCategoryMagentoDriverConfig } from '../interfaces/public_api';
import { magentoCategoryTruncateUri } from '../transformers/truncate-uri';

export const MAGENTO_CATEGORY_CONFIG_DEFAULT: DaffCategoryMagentoDriverConfig = {
  truncateUri: true,
  uriTruncationStrategy: magentoCategoryTruncateUri,
};
