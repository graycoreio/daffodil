import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCartCoupon } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCartCoupon implements DaffCartCoupon {
  id = faker.string.uuid();
  code = faker.string.alphanumeric(20);
  description = faker.lorem.words(5);
};

@Injectable({
  providedIn: 'root',
})
export class DaffCartCouponFactory extends DaffModelFactory<DaffCartCoupon> {
  constructor() {
    super(MockDaffCartCoupon);
  }
}
