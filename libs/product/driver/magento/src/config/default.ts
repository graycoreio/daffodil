import { DaffProductMagentoDriverConfig } from '../interfaces/public_api';
import { magentoProductTruncateUri } from '../transforms/truncate-uri';

export const MAGENTO_PRODUCT_CONFIG_DEFAULT: DaffProductMagentoDriverConfig = {
  baseMediaUrl: '',
  truncateUri: true,
  uriTruncationStrategy: magentoProductTruncateUri,
};
