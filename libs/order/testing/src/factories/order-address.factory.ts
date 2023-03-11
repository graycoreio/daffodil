import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';
import { DaffOrderAddress } from '@daffodil/order';

export class MockOrderAddress extends MockDaffPersonalAddress implements DaffOrderAddress {
  order_id = faker.datatype.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffOrderAddressFactory extends DaffModelFactory<DaffOrderAddress> {
  constructor() {
    super(MockOrderAddress);
  }
}
