import {
  daffIdentifiableArrayToDict,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { magentoPageInfoTransform } from '@daffodil/driver/magento';
import { DaffOrderCollection } from '@daffodil/order';

import { MagentoGetCustomerOrdersResponse } from '../../models/public_api';
import { daffMagentoCustomerOrderTransformOrder } from './order';

export function magentoCustomerOrderCollectionTransform(response: MagentoGetCustomerOrdersResponse): DaffOrderCollection {
  const orders = response.customer.orders.items.map(daffMagentoCustomerOrderTransformOrder);
  return {
    data: daffIdentifiableArrayToDict(orders),
    metadata: {
      ...magentoPageInfoTransform(response.customer.orders.page_info),
      count: response.customer.orders.total_count,
      filters: {},
      ids: orders.map(order => order.id),
      sortOptions: {
        default: null,
        options: [],
      },
      appliedSortDirection: DaffSortDirectionEnum.Ascending,
      appliedSortOption: null,
    },
  };
}
