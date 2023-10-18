import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import { MockDaffCustomerPayment } from '@daffodil/customer-payment/testing';
import {
  DaffCustomerPaymentAuthorizeNet,
  DaffCustomerPaymentAuthorizeNetCCType,
} from '@daffodil/customer-payment-authorizenet';

/**
 * Mock class for {@link DaffCustomerPaymentAuthorizeNet}.
 */
export class MockDaffCustomerPaymentAuthorizeNet extends MockDaffCustomerPayment implements DaffCustomerPaymentAuthorizeNet {
  data = {
    type: faker.helpers.arrayElement(Object.values(DaffCustomerPaymentAuthorizeNetCCType)),
    last4: faker.finance.creditCardNumber('####'),
    expMonth: faker.date.future().getMonth().toString(),
    expYear: faker.date.future().getFullYear().toString(),
  };
};

/**
 * Model factory for {@link DaffCustomerPaymentAuthorizeNet}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentAuthorizeNetFactory extends DaffModelFactory<DaffCustomerPaymentAuthorizeNet>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomerPaymentAuthorizeNet, addressFactory);
  }
}
