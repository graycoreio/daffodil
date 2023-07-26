import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentAuthorizeNetApplyRequest } from '@daffodil/customer-payment-authorizenet';

import { DaffCustomerPaymentAuthorizeNetApplyRequestFactory } from './customer-payment-apply-request.factory';

describe('@daffodil/customer-payment/testing | DaffCustomerPaymentAuthorizeNetApplyRequestFactory', () => {
  let factory: DaffCustomerPaymentAuthorizeNetApplyRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerPaymentAuthorizeNetApplyRequestFactory],
    });

    factory = TestBed.inject(DaffCustomerPaymentAuthorizeNetApplyRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerPaymentAuthorizeNetApplyRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.data.id).toBeDefined();
      expect(result.data.securityCode).toBeDefined();
    });
  });
});
