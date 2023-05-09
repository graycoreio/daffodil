import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCartShippingMethod } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';

export class MockCartShippingMethod implements MagentoCartShippingMethod {
  carrier_code = faker.random.word();
  carrier_title = faker.random.words(2);
  method_title = faker.random.words(2);
  method_code = faker.random.word();
  amount = this.money();

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartShippingMethodFactory extends DaffModelFactory<MagentoCartShippingMethod> {
  constructor() {
    super(MockCartShippingMethod);
  }
}
