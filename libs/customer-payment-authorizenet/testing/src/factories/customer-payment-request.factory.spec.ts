import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentAuthorizeNetRequest } from '@daffodil/customer-payment-authorizenet';

import { DaffCustomerPaymentAuthorizeNetRequestFactory } from './customer-payment-request.factory';

describe('@daffodil/customer-payment/testing | DaffCustomerPaymentAuthorizeNetRequestFactory', () => {
  let factory: DaffCustomerPaymentAuthorizeNetRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerPaymentAuthorizeNetRequestFactory],
    });

    factory = TestBed.inject(DaffCustomerPaymentAuthorizeNetRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerPaymentAuthorizeNetRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.data.creditCard.month).toBeDefined();
      expect(result.data.creditCard.year).toBeDefined();
      expect(result.data.creditCard.cardnumber).toBeDefined();
      expect(result.data.creditCard.securitycode).toBeDefined();
      expect(result.data.type).toBeDefined();
    });
  });
});
