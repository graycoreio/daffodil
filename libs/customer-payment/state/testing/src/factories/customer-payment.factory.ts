import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffState } from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import { DaffCustomerPaymentEntity } from '@daffodil/customer-payment/state';
import { MockDaffCustomerPayment } from '@daffodil/customer-payment/testing';

/**
 * Mock class for {@link DaffCustomerPaymentEntity}.
 */
export class MockDaffCustomerPaymentEntity extends MockDaffCustomerPayment implements DaffCustomerPaymentEntity {
  daffState = DaffState.Stable;
  daffErrors = [];
  daffTemp = false;
}

/**
 * Model factory for {@link DaffCustomerPaymentEntity}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentEntityFactory extends DaffModelFactory<DaffCustomerPaymentEntity>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomerPaymentEntity, addressFactory);
  }
}
