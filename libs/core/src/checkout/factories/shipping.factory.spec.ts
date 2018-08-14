import { TestBed } from '@angular/core/testing';

import { ShippingFactory, MockShippingOption } from './shipping.factory';
import { ShippingOption } from '../models/shipping-option';

describe('Core | Checkout | Factories | ShippingFactory', () => {
  
  let shippingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingFactory]
    });

    shippingFactory = TestBed.get(ShippingFactory);
  });

  it('should be created', () => {
    expect(shippingFactory).toBeTruthy();
  });

  describe('createShippingOptions', () => {
    
    let result:ShippingOption[];

    beforeEach(() => {
      result = shippingFactory.createShippingOptions();
    });

    it('should return an array of ShippingOptions', () => {
      expect(result[0]).toEqual(jasmine.any(MockShippingOption));
    });
  });
});
