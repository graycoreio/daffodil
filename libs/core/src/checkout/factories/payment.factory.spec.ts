import { TestBed } from '@angular/core/testing';

import { PaymentFactory, MockPaymentInfo } from './payment.factory';

describe('Core | Payment | Testing | PaymentFactory', () => {
  
  let paymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentFactory]
    });

    paymentFactory = TestBed.get(PaymentFactory);
  });

  it('should be created', () => {
    expect(paymentFactory).toBeTruthy();
  });

  describe('create', () => {

    let result:MockPaymentInfo;

    beforeEach(() => {
      result = paymentFactory.create();
    });

    it('should return a MockPaymentInfo with name', () => {
      expect(result.name).toBeDefined();
    });

    it('should return an MockPaymentInfo with cardnumber', () => {
      expect(result.cardnumber).toBeDefined();
    });

    it('should return an MockPaymentInfo with month', () => {
      expect(result.month).toBeDefined();
    });

    it('should return an MockPaymentInfo with year', () => {
      expect(result.year).toBeDefined();
    });

    it('should return an MockPaymentInfo with securitycode', () => {
      expect(result.securitycode).toBeDefined();
    });
  });
});
