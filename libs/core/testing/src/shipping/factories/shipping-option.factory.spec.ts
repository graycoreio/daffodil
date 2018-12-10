import { TestBed } from '@angular/core/testing';

import { DaffShippingOptionFactory, MockShippingOption } from './shipping-option.factory';
import { ShippingOption } from '@daffodil/core';

describe('Core | Shipping | Factories | ShippingOptionFactory', () => {
  
  let shippingOptionFactory: DaffShippingOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffShippingOptionFactory]
    });

    shippingOptionFactory = TestBed.get(DaffShippingOptionFactory);
  });

  it('should be created', () => {
    expect(shippingOptionFactory).toBeTruthy();
  });

  describe('create', () => {
    
    let result: ShippingOption;

    beforeEach(() => {
      result = shippingOptionFactory.create();
    });

    xit('should return a shipping option', () => {
      
    });
  });

  describe('createMany', () => {
    let result: ShippingOption[];

    it('should create as many shipping rates as desired', () => {
      result = shippingOptionFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = shippingOptionFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
