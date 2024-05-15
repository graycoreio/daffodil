import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import { DaffCustomerPaymentRequest } from '@daffodil/customer-payment';
import { MockPaymentRequest } from '@daffodil/payment/testing';

/**
 * Mock class for {@link DaffCustomerPaymentRequest}.
 */
export class MockDaffCustomerPaymentRequest extends MockPaymentRequest implements DaffCustomerPaymentRequest {
  address = this.addressFactory.create();
  default = faker.datatype.boolean();
  nickname = faker.random.word();
  owner = faker.person.fullName();

  constructor(
    private addressFactory: DaffCustomerAddressFactory,
  ) {
    super();
  }
};

/**
 * Model factory for {@link DaffCustomerPaymentRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentRequestFactory extends DaffModelFactory<DaffCustomerPaymentRequest>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomerPaymentRequest, addressFactory);
  }
}
