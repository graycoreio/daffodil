import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';

import { MagentoProductReview } from './public_api';

export interface MagentoProductReviews {
  items: MagentoProductReview[];
  page_info: MagentoSearchResultPageInfo;
}
