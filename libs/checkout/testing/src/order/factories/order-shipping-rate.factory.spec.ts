import { TestBed } from '@angular/core/testing';

import {  DaffOrderShippingRate } from '@daffodil/checkout';
import { DaffOrderShippingRateFactory } from './order-shipping-rate.factory';

describe('Checkout | Testing | Order | Factories | OrderShippingRateFactory', () => {

  let orderShippingRateFactory: DaffOrderShippingRateFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderShippingRateFactory]
    });

    orderShippingRateFactory = TestBed.get(DaffOrderShippingRateFactory);
  });

  it('should be created', () => {
    expect(orderShippingRateFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOrderShippingRate;

    beforeEach(() => {
      result = orderShippingRateFactory.create();
    });

    xit('should return a DaffOrderShippingRate with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: DaffOrderShippingRate[];

    it('should create as many order shipping rates as desired', () => {
      result = orderShippingRateFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderShippingRateFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
