import { DaffProductMagentoDriverConfig } from '../interfaces/public_api';
import { magentoProductTruncateUrl } from '../transforms/truncate-url';

export const MAGENTO_PRODUCT_CONFIG_DEFAULT: DaffProductMagentoDriverConfig = {
  baseMediaUrl: '',
  truncateUrl: true,
  urlTruncationStrategy: magentoProductTruncateUrl,
};
