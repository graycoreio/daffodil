import { TestBed } from '@angular/core/testing';

import {  DaffOrderShippingMethod } from '@daffodil/order';
import { DaffOrderShippingMethodFactory } from './order-shipping-rate.factory';

describe('Order | Testing | Factories | OrderShippingRateFactory', () => {

  let orderShippingRateFactory: DaffOrderShippingMethodFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderShippingMethodFactory]
    });

    orderShippingRateFactory = TestBed.get(DaffOrderShippingMethodFactory);
  });

  it('should be created', () => {
    expect(orderShippingRateFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOrderShippingMethod;

    beforeEach(() => {
      result = orderShippingRateFactory.create();
    });

    xit('should return a DaffOrderShippingMethod with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: DaffOrderShippingMethod[];

    it('should create as many order shipping rates as desired', () => {
      result = orderShippingRateFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderShippingRateFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
