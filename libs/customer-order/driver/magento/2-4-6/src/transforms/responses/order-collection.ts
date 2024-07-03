import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffCollectionRequest,
  daffIdentifiableArrayToDict,
} from '@daffodil/core';
import { magentoPageInfoTransform } from '@daffodil/driver/magento';
import { DaffOrderCollection } from '@daffodil/order';

import { magentoCustomerOrderSortFields } from '../../constants/sort/fields';
import { DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM } from '../../injection-tokens/transforms/token';
import { DaffMagentoCustomerOrderTransform } from '../../interfaces/public_api';
import { MagentoGetCustomerOrdersResponse } from '../../queries/public_api';

@Injectable({
  providedIn: 'any',
})
export class MagentoCustomerOrderCollectionTransformer {
  constructor(
    @Inject(DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM) private orderTransform: DaffMagentoCustomerOrderTransform,
  ) {}

  transform(response: MagentoGetCustomerOrdersResponse, request: DaffCollectionRequest): DaffOrderCollection {
    const orders = response.customer.orders.items.map((order) => this.orderTransform(order, response.customer.email));
    return {
      data: daffIdentifiableArrayToDict(orders),
      metadata: {
        ...magentoPageInfoTransform(response.customer.orders.page_info),
        count: response.customer.orders.total_count,
        filters: {},
        ids: orders.map(order => order.id),
        sortOptions: magentoCustomerOrderSortFields,
        appliedSortDirection: request.appliedSortDirection,
        appliedSortOption: request.appliedSortOption,
      },
    };
  }
}
