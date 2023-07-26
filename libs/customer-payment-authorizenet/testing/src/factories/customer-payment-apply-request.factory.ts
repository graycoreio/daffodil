import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCustomerPaymentAuthorizeNetApplyRequest,
  DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND,
} from '@daffodil/customer-payment-authorizenet';
import { MockDaffCustomerPaymentRequest } from '@daffodil/customer-payment/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

/**
 * Mock class for {@link DaffCustomerPaymentAuthorizeNetApplyRequest}.
 */
export class MockDaffCustomerPaymentAuthorizeNetApplyRequest extends MockDaffCustomerPaymentRequest implements DaffCustomerPaymentAuthorizeNetApplyRequest {
  kind: typeof DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND = DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND;
  data = {
    id: faker.datatype.uuid(),
    securityCode: faker.finance.creditCardCVV(),
  };
};

/**
 * Model factory for {@link DaffCustomerPaymentAuthorizeNetApplyRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentAuthorizeNetApplyRequestFactory extends DaffModelFactory<DaffCustomerPaymentAuthorizeNetApplyRequest>{
  constructor(
    addressFactory: DaffCustomerAddressFactory,
  ) {
    super(MockDaffCustomerPaymentAuthorizeNetApplyRequest, addressFactory);
  }
}
