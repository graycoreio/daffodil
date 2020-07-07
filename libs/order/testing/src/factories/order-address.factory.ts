import { Injectable } from '@angular/core';

import * as faker from 'faker/locale/en_US';

import { DaffOrderAddress } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';

export class MockOrderAddress extends MockDaffPersonalAddress implements DaffOrderAddress {
  order_id = faker.random.number({min: 1, max: 1000});
}

@Injectable({
  providedIn: 'root'
})
export class DaffOrderAddressFactory extends DaffModelFactory<DaffOrderAddress> {
  constructor() {
    super(MockOrderAddress);
  }
}
