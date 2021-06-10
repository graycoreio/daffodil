import { DaffProductMagentoDriverConfig } from '../interfaces/public_api';
import { magentoProductTruncateUrl } from '../transforms/truncate-url';

/**
 * The default configuration for the {@link DaffProductMagentoDriverConfig}.
 */
export const MAGENTO_PRODUCT_CONFIG_DEFAULT: DaffProductMagentoDriverConfig = {
  baseMediaUrl: '',
  truncateUrl: true,
  urlTruncationStrategy: magentoProductTruncateUrl,
};
