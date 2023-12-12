import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { MockPaymentResponse } from '@daffodil/payment/testing';

/**
 * Mock class for {@link DaffCustomerPayment}.
 */
export class MockDaffCustomerPayment extends MockPaymentResponse implements DaffCustomerPayment {
  id = faker.datatype.uuid();
  address = this.addressFactory.create();
  default = faker.datatype.boolean();
  nickname = faker.random.word();
  createdAt = faker.date.recent().toISOString();
  owner = faker.name.findName();

  constructor(
    private addressFactory: DaffCustomerAddressFactory,
  ) {
    super();
  }
};

/**
 * Model factory for {@link DaffCustomerPayment}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentFactory extends DaffModelFactory<DaffCustomerPayment>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomerPayment, addressFactory);
  }
}
