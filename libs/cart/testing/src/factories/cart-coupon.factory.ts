import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCartCoupon } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCartCoupon implements DaffCartCoupon {
  id = faker.datatype.number({ min: 1, max: 1000 });
  coupon_id = this.id;
  code = faker.random.alphaNumeric(20);
  description = faker.random.words(5);
};

@Injectable({
  providedIn: 'root',
})
export class DaffCartCouponFactory extends DaffModelFactory<DaffCartCoupon> {
  constructor() {
    super(MockDaffCartCoupon);
  }
}
