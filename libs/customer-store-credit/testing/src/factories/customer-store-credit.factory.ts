import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

/**
 * Mock class for {@link DaffCustomerStoreCredit}.
 */
export class MockDaffCustomerStoreCredit implements DaffCustomerStoreCredit {
  balance = faker.datatype.number({ min: 0, max: 1000 });
};

/**
 * Model factory for {@link DaffCustomerStoreCredit}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditFactory extends DaffModelFactory<DaffCustomerStoreCredit>{
  constructor() {
    super(MockDaffCustomerStoreCredit);
  }
}
