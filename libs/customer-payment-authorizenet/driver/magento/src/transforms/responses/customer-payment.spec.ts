import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentAuthorizeNet } from '@daffodil/customer-payment-authorizenet';
import { MagentoTokenBaseCard } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { MagentoTokenBaseCardFactory } from '@daffodil/customer-payment-authorizenet/driver/magento/testing';

import { magentoCustomerPaymentAnetCCTypeResponseTransform } from './card-type';
import { magentoCustomerPaymentAuthorizeNetTransform } from './customer-payment';

describe('@daffodil/customer-payment-authorizenet/driver/magento | magentoCustomerPaymentAuthorizeNetTransform', () => {
  let paymentFactory: MagentoTokenBaseCardFactory;
  let mockPayment: MagentoTokenBaseCard;
  let result: DaffCustomerPaymentAuthorizeNet;

  beforeEach(() => {
    paymentFactory = TestBed.inject(MagentoTokenBaseCardFactory);

    mockPayment = paymentFactory.create();

    result = magentoCustomerPaymentAuthorizeNetTransform(mockPayment);
  });

  it('should transform', () => {
    expect(result.id).toEqual(mockPayment.hash);
    expect(result.method).toEqual(mockPayment.method);
    expect(result.default).toBeFalse();
    expect(result.address.street).toEqual(mockPayment.address.street[0]);
    expect(result.nickname).toEqual(mockPayment.label);
    expect(result.createdAt).toEqual(mockPayment.created_at);
    expect(result.owner).toEqual(mockPayment.additional.cc_owner);
    expect(result.data.last4).toEqual(mockPayment.additional.cc_last4);
    expect(result.data.expMonth).toEqual(mockPayment.additional.cc_exp_month);
    expect(result.data.expYear).toEqual(mockPayment.additional.cc_exp_year);
    expect(result.data.type).toEqual(magentoCustomerPaymentAnetCCTypeResponseTransform(mockPayment.additional.cc_type));
  });
});
