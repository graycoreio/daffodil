import { TestBed } from '@angular/core/testing';

import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerPaymentAuthorizeNet } from '@daffodil/customer-payment-authorizenet';
import { MagentoTokenBaseCardUpdateInput } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { DaffCustomerPaymentAuthorizeNetFactory } from '@daffodil/customer-payment-authorizenet/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { magentoCustomerPaymentAnetCCTypeRequestTransform } from './cc-type';
import { magentoCustomerPaymentUpdateInputTransform } from './update-input';

describe('@daffodil/customer-payment-authorizenet/driver/magento | magentoCustomerPaymentUpdateInputTransform', () => {
  let customerPaymentFactory: DaffCustomerPaymentAuthorizeNetFactory;
  let customerAddressFactory: DaffCustomerAddressFactory;
  let mockCustomerPayment: DaffCustomerPaymentAuthorizeNet;
  let mockCustomerAddress: DaffCustomerAddress;

  let result: MagentoTokenBaseCardUpdateInput;

  beforeEach(() => {
    customerPaymentFactory = TestBed.inject(DaffCustomerPaymentAuthorizeNetFactory);
    customerAddressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockCustomerAddress = customerAddressFactory.create();
    mockCustomerPayment = customerPaymentFactory.create({
      address: mockCustomerAddress,
    });

    result = magentoCustomerPaymentUpdateInputTransform(mockCustomerPayment, 'method');
  });

  it('should transform fields', () => {
    expect(result.hash).toEqual(mockCustomerPayment.id);
    expect(result.customer_email).toEqual(mockCustomerAddress.email);
    expect(result.method).toEqual('method');
    expect(result.active).toBeTrue();
    expect(result.additional.cc_type).toEqual(magentoCustomerPaymentAnetCCTypeRequestTransform(mockCustomerPayment.data.type));
    expect(result.additional.cc_exp_month).toEqual(mockCustomerPayment.data.expMonth);
    expect(result.additional.cc_exp_year).toEqual(mockCustomerPayment.data.expYear);
    expect(result.additional.cc_last4).toEqual(mockCustomerPayment.data.last4);
    expect(result.additional.cc_owner).toEqual(mockCustomerPayment.owner);
  });
});
