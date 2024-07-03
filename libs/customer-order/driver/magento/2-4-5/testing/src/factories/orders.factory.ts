import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoCustomerOrders,
  MagentoCustomerOrder,
} from '@daffodil/customer-order/driver/magento/2-4-5';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';
import { MagentoSearchResultPageInfoFactory } from '@daffodil/driver/magento/testing';

import { MagentoCustomerOrderFactory } from './order.factory';

export class MockMagentoCustomerOrders implements MagentoCustomerOrders {
  items = this.createReviews();
  page_info = this.createPageInfo();
  total_count = this.items.length;

  constructor(
    protected orderFactory: MagentoCustomerOrderFactory,
    protected pageInfoFactory: MagentoSearchResultPageInfoFactory,
  ) {}

  private createReviews(): MagentoCustomerOrder[] {
    return this.orderFactory.createMany(faker.datatype.number({ min: 3, max: 5 }));
  }

  private createPageInfo(): MagentoSearchResultPageInfo {
    return this.pageInfoFactory.create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerOrdersFactory extends DaffModelFactory<MagentoCustomerOrders> {
  constructor(
    orderFactory: MagentoCustomerOrderFactory,
    pageInfoFactory: MagentoSearchResultPageInfoFactory,
  ) {
    super(MockMagentoCustomerOrders, orderFactory, pageInfoFactory);
  }
}
