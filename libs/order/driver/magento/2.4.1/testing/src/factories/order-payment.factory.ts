import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderPayment } from '@daffodil/order/driver/magento/2.4.1';

export class MockOrderPayment implements MagentoOrderPayment {
  __typename: 'OrderPaymentMethod' = 'OrderPaymentMethod';
  name = 'card';
  type = 'visa';
  additional_data = [];
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderPaymentFactory extends DaffModelFactory<MagentoOrderPayment> {
  constructor() {
    super(MockOrderPayment);
  }
}
