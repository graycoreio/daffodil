import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento/2.4.7';

import { MagentoCustomerOrder } from './order.type';

export interface MagentoCustomerOrders {
  page_info: MagentoSearchResultPageInfo;
  total_count: number;
  items: MagentoCustomerOrder[];
}
