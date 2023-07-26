import { TestBed } from '@angular/core/testing';

import { MagentoAuthorizeNetPayment } from '@daffodil/authorizenet/driver/magento';
import { DaffCustomerPaymentAuthorizeNetRequest } from '@daffodil/customer-payment-authorizenet';
import { MagentoTokenBaseCardCreateInput } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { DaffCustomerPaymentAuthorizeNetRequestFactory } from '@daffodil/customer-payment-authorizenet/testing';

import { magentoCustomerPaymentAnetCCTypeRequestTransform } from './cc-type';
import { magentoCustomerPaymentCreateInputTransform } from './create-input';

describe('@daffodil/customer-payment-authorizenet/driver/magento | magentoCustomerPaymentCreateInputTransform', () => {
  let customerPaymentFactory: DaffCustomerPaymentAuthorizeNetRequestFactory;
  let mockCustomerPayment: DaffCustomerPaymentAuthorizeNetRequest;
  let mockAnetResponse: MagentoAuthorizeNetPayment;

  let result: MagentoTokenBaseCardCreateInput;

  beforeEach(() => {
    customerPaymentFactory = TestBed.inject(DaffCustomerPaymentAuthorizeNetRequestFactory);

    mockCustomerPayment = customerPaymentFactory.create();
    mockAnetResponse = {
      code: 'authorizenet_acceptjs',
      authorizenet_acceptjs: {
        cc_last_4: 1111,
        opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
        opaque_data_value: 'paymentNonce',
      },
    };

    result = magentoCustomerPaymentCreateInputTransform(mockCustomerPayment, mockAnetResponse, 'method');
  });

  it('should transform fields', () => {
    expect(result.customer_email).toEqual(mockCustomerPayment.data.email);
    expect(result.method).toEqual('method');
    expect(result.active).toBeTrue();
    expect(result.additional.cc_type).toEqual(magentoCustomerPaymentAnetCCTypeRequestTransform(mockCustomerPayment.data.type));
    expect(result.additional.cc_exp_month).toEqual(mockCustomerPayment.data.creditCard.month);
    expect(result.additional.cc_exp_year).toEqual(mockCustomerPayment.data.creditCard.year);
    expect(result.additional.cc_cid).toEqual(mockCustomerPayment.data.creditCard.securitycode);
    expect(result.additional.cc_last4).toEqual(mockCustomerPayment.data.creditCard.cardnumber.slice(mockCustomerPayment.data.creditCard.cardnumber.length - 4));
    expect(result.additional.cc_owner).toEqual(mockCustomerPayment.owner);
    expect(result.additional.acceptjs_key).toEqual(mockAnetResponse.authorizenet_acceptjs.opaque_data_descriptor);
    expect(result.additional.acceptjs_value).toEqual(mockAnetResponse.authorizenet_acceptjs.opaque_data_value);
  });
});
