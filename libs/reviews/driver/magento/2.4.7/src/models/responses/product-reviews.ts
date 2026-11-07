import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento/2.4.7';

import { MagentoProductReview } from './public_api';

export interface MagentoProductReviews {
  items: MagentoProductReview[];
  page_info: MagentoSearchResultPageInfo;
}
