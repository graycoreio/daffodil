import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import { MagentoOrderBundleItemSelectedOptionValue } from '@daffodil/order/driver/magento/2.4.1';

export class MockMagentoOrderBundleItemSelectedOptionValue implements MagentoOrderBundleItemSelectedOptionValue {
  product_name = faker.random.word();
  product_sku = faker.datatype.uuid();
  quantity = faker.datatype.number({ min: 1, max: 1000 });
  price = this.moneyFactory.create();

  constructor(
    private moneyFactory: MagentoMoneyFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderBundleItemSelectedOptionValueFactory extends DaffModelFactory<MagentoOrderBundleItemSelectedOptionValue> {
  constructor(
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(MockMagentoOrderBundleItemSelectedOptionValue, moneyFactory);
  }
}
