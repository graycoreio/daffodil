import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';

import { MagentoCustomerOrder } from './order.type';

export interface MagentoCustomerOrders {
  page_info: MagentoSearchResultPageInfo;
  total_count: number;
  items: MagentoCustomerOrder[];
}
