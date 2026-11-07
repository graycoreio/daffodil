import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCartShippingMethod } from '@daffodil/cart/driver/magento/2.4.7';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento/2.4.7';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/2.4.7/testing';

export class MockCartShippingMethod implements MagentoCartShippingMethod {
  carrier_code = faker.lorem.word();
  carrier_title = faker.lorem.words(2);
  method_title = faker.lorem.words(2);
  method_code = faker.lorem.word();
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
