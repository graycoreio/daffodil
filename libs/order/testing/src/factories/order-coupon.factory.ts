import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderCoupon } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderCoupon implements DaffOrderCoupon {
  code = faker.random.alphaNumeric(10);
};


@Injectable({
  providedIn: 'root'
})
export class DaffOrderCouponFactory extends DaffModelFactory<DaffOrderCoupon>{
  constructor() {
    super(MockOrderCoupon);
  }
}
