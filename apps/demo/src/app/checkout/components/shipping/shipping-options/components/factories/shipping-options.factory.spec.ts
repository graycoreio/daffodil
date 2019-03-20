import { TestBed } from '@angular/core/testing';

import { ShippingOption } from '@daffodil/checkout';

import { ShippingOptionsFactory } from './shipping-options.factory';

describe('Daffodil Demo | Checkout | Shipping | Shipping Options | Factories | ShippingOptionsFactory', () => {
  
  let shippingOptionsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingOptionsFactory]
    });

    shippingOptionsFactory = TestBed.get(ShippingOptionsFactory);
  });

  it('should be created', () => {
    expect(shippingOptionsFactory).toBeTruthy();
  });

  describe('create', () => {
    
    let result:ShippingOption[];
    let expectedResult;

    beforeEach(() => {
      expectedResult = [
        { id: '0',
          text: 'Standard' },
        { id: '1',
          text: 'Two Day' },
        { id: '2',
          text: 'One Day' }
      ]
      result = shippingOptionsFactory.create();
    });

    it('should return an array of ShippingOptions', () => {
      expect(result).toEqual(expectedResult);
    });
  });
});
