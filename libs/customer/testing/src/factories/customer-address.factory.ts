import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerAddress } from '@daffodil/customer';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';

/**
 * Mock class for {@link DaffCustomerAddress}.
 */
export class MockDaffCustomerAddress extends MockDaffPersonalAddress implements DaffCustomerAddress {
  id = faker.datatype.uuid();
  defaultBilling = faker.datatype.boolean();
  defaultShipping = faker.datatype.boolean();
};

/**
 * Model factory for {@link DaffCustomerAddress}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressFactory extends DaffModelFactory<DaffCustomerAddress>{
  constructor() {
    super(MockDaffCustomerAddress);
  }
}
