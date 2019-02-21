import { TestBed } from '@angular/core/testing';

import { CartShippingRate } from '@daffodil/cart';
import { DaffCartShippingRateFactory } from './cart-shipping-rate.factory';

describe('Core | Testing | Cart | Factories | CartShippingRateFactory', () => {
  
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

    let result: CartShippingRate;

    beforeEach(() => {
      result = cartShippingRateFactory.create();
    });
    
    xit('should return a CartShippingRate with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: CartShippingRate[];

    it('should create as many cart shipping rates as desired', () => {
      result = cartShippingRateFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartShippingRateFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
