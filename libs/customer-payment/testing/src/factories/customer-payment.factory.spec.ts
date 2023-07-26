import { TestBed } from '@angular/core/testing';

import { DaffCustomerPayment } from '@daffodil/customer-payment';

import { DaffCustomerPaymentFactory } from './customer-payment.factory';

describe('@daffodil/customer-payment/testing | DaffCustomerPaymentFactory', () => {
  let paymentFactory: DaffCustomerPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerPaymentFactory],
    });

    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);
  });

  it('should be created', () => {
    expect(paymentFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerPayment;

    beforeEach(() => {
      result = paymentFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.default).toBeDefined();
      expect(result.address).toBeDefined();
      expect(result.nickname).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.owner).toBeDefined();
    });
  });
});
