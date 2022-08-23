import { MagentoProductPageInfo } from '@daffodil/product/driver/magento';

import { MagentoProductReview } from './public_api';

export interface MagentoProductReviews {
  items: MagentoProductReview[];
  page_info: MagentoProductPageInfo;
}
