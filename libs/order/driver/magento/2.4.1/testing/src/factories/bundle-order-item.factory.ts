import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoDiscountFactory,
  MagentoMoneyFactory,
} from '@daffodil/driver/magento/testing';
import {
  MagentoOrderBundleItem,
  MagentoOrderItemType,
  MagentoOrderItemTypenames,
} from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderBundleItemSelectedOptionFactory } from './bundle-order-item-option.factory';
import { MockOrderItem } from './order-item.factory';

export class MockBundleOrderItem extends MockOrderItem implements MagentoOrderBundleItem {
  __typename = MagentoOrderItemTypenames.BundleOrderItem;
  type = MagentoOrderItemType.Bundle;
  bundle_options = this.optionFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));

  constructor(
    private optionFactory: MagentoOrderBundleItemSelectedOptionFactory,
    discountFactory: MagentoDiscountFactory,
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(discountFactory, moneyFactory);
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderBundleItemFactory extends DaffModelFactory<MagentoOrderBundleItem> {
  constructor(
    optionFactory: MagentoOrderBundleItemSelectedOptionFactory,
    discountFactory: MagentoDiscountFactory,
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(MockBundleOrderItem, optionFactory, discountFactory, moneyFactory);
  }
}
