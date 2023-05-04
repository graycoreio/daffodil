import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  daffIdentifiableArrayToDict,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { magentoPageInfoTransform } from '@daffodil/driver/magento';
import { DaffOrderCollection } from '@daffodil/order';

import { DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM } from '../../injection-tokens/public_api';
import { DaffMagentoCustomerOrderTransform } from '../../interfaces/public_api';
import { MagentoGetCustomerOrdersResponse } from '../../models/public_api';

@Injectable({
  providedIn: 'any',
})
export class MagentoCustomerOrderCollectionTransformer {
  constructor(
    @Inject(DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM) private orderTransform: DaffMagentoCustomerOrderTransform,
  ) {}

  transform(response: MagentoGetCustomerOrdersResponse): DaffOrderCollection {
    const orders = response.customer.orders.items.map((order) => this.orderTransform(order, response.customer.email));
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
}
