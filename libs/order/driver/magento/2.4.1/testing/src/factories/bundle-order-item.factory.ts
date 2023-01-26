import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoDiscountFactory } from '@daffodil/driver/magento/testing';
import {
  MagentoOrderBundleItem,
  MagentoOrderItemType,
} from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderBundleItemSelectedOptionFactory } from './bundle-order-item-option.factory';
import { MockOrderItem } from './order-item.factory';

export class MockBundleOrderItem extends MockOrderItem implements MagentoOrderBundleItem {
  type = MagentoOrderItemType.Bundle;
  bundle_options = this.optionFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));

  constructor(
    private optionFactory: MagentoOrderBundleItemSelectedOptionFactory,
    discountFactory: MagentoDiscountFactory,
  ) {
    super(discountFactory);
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderBundleItemFactory extends DaffModelFactory<MagentoOrderBundleItem> {
  constructor(
    optionFactory: MagentoOrderBundleItemSelectedOptionFactory,
    discountFactory: MagentoDiscountFactory,
  ) {
    super(MockBundleOrderItem, optionFactory, discountFactory);
  }
}
