import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { MagentoCartCoupon } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartCoupon implements MagentoCartCoupon {
  code = faker.random.alphaNumeric(20);
};


@Injectable({
  providedIn: 'root',
})
export class MagentoCartCouponFactory extends DaffModelFactory<MagentoCartCoupon> {
  constructor() {
    super(MockMagentoCartCoupon);
  }
}
