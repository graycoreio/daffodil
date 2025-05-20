import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCartPaymentMethod } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartPaymentMethod implements MagentoCartPaymentMethod {
  code = faker.lorem.word();
  title = faker.lorem.word();
  purchase_order_number = faker.lorem.word();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartPaymentMethodFactory extends DaffModelFactory<MagentoCartPaymentMethod> {
  constructor() {
    super(MockMagentoCartPaymentMethod);
  }
}
