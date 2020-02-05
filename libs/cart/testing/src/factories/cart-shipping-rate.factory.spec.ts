import { TestBed } from '@angular/core/testing';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingRateFactory } from './cart-shipping-rate.factory';

describe('Cart | Testing | Factories | CartShippingRateFactory', () => {
  
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartShippingRateFactory]
    });

    cartShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);
  });

  it('should be created', () => {
    expect(cartShippingRateFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCartShippingRate;

    beforeEach(() => {
      result = cartShippingRateFactory.create();
    });
    
    xit('should return a CartShippingRate with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: DaffCartShippingRate[];

    it('should create as many cart shipping rates as desired', () => {
      result = cartShippingRateFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartShippingRateFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
