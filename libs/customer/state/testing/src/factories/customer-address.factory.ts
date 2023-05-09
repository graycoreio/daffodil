import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffState } from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerAddressEntity } from '@daffodil/customer/state';
import { MockDaffCustomerAddress } from '@daffodil/customer/testing';

/**
 * Mock class for {@link DaffCustomerAddressEntity}.
 */
export class MockDaffCustomerAddressEntity extends MockDaffCustomerAddress implements DaffCustomerAddressEntity {
  daffState = DaffState.Stable;
  daffErrors = [];
  daffTemp = false;
}

/**
 * Model factory for {@link DaffCustomerAddressEntity}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressEntityFactory extends DaffModelFactory<DaffCustomerAddressEntity>{
  constructor() {
    super(MockDaffCustomerAddressEntity);
  }
}
