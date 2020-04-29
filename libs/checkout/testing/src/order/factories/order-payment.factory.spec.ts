import { TestBed } from '@angular/core/testing';

import { DaffOrderPayment } from '@daffodil/checkout';
import { DaffOrderPaymentFactory } from './order-payment.factory';

describe('Checkout | Testing | Order | Factories | OrderPaymentFactory', () => {

  let orderPaymentFactory: DaffOrderPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderPaymentFactory]
    });

    orderPaymentFactory = TestBed.get(DaffOrderPaymentFactory);
  });

  it('should be created', () => {
    expect(orderPaymentFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOrderPayment;

    beforeEach(() => {
      result = orderPaymentFactory.create();
    });

    xit('should return a DaffOrderPayment with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: DaffOrderPayment[];

    it('should create as many order payments as desired', () => {
      result = orderPaymentFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderPaymentFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
