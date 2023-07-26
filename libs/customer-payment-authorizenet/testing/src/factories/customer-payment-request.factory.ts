import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCustomerPaymentAuthorizeNetCCType,
  DaffCustomerPaymentAuthorizeNetRequest,
  DaffCustomerPaymentAuthorizeNetRequestData,
  DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND,
} from '@daffodil/customer-payment-authorizenet';
import { MockDaffCustomerPaymentRequest } from '@daffodil/customer-payment/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

/**
 * Mock class for {@link DaffCustomerPaymentAuthorizeNetRequest}.
 */
export class MockDaffCustomerPaymentAuthorizeNetRequest extends MockDaffCustomerPaymentRequest implements DaffCustomerPaymentAuthorizeNetRequest {
  kind: typeof DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND = DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND;
  data: DaffCustomerPaymentAuthorizeNetRequestData = {
    creditCard: {
      securitycode: faker.finance.creditCardCVV(),
      cardnumber: faker.finance.creditCardNumber(),
      month: faker.date.future().getMonth().toString(),
      year: faker.date.future().getFullYear().toString(),
    },
    email: faker.internet.email(),
    type: faker.helpers.arrayElement(Object.values(DaffCustomerPaymentAuthorizeNetCCType)),
  };
};

/**
 * Model factory for {@link DaffCustomerPaymentAuthorizeNetRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentAuthorizeNetRequestFactory extends DaffModelFactory<DaffCustomerPaymentAuthorizeNetRequest>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomerPaymentAuthorizeNetRequest, addressFactory);
  }
}
