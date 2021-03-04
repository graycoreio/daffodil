import { TestBed } from '@angular/core/testing';

import { ShippingRate } from '@daffodil/checkout';

import { DaffShippingRateFactory } from './shipping-rate.factory';

describe('Checkout | Testing | Shipping | Factories | CartShippingRateFactory', () => {

  let shippingRateFactory: DaffShippingRateFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffShippingRateFactory],
    });

    shippingRateFactory = TestBed.inject(DaffShippingRateFactory);
  });

  it('should be created', () => {
    expect(shippingRateFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShippingRate;

    beforeEach(() => {
      result = shippingRateFactory.create();
    });

    xit('should return a ShippingRate with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: ShippingRate[];

    it('should create as many shipping rates as desired', () => {
      result = shippingRateFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = shippingRateFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
