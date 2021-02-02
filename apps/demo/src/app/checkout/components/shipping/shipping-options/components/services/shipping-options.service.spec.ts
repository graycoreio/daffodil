import { TestBed } from '@angular/core/testing';

import { ShippingOptionsFactory } from '../factories/shipping-options.factory';
import { ShippingOptionsService } from './shipping-options.service';

describe('Daffodil Demo | Checkout | Shipping | Shipping Options | ShippingOptionsService', () => {
  let shippingOptionsService: ShippingOptionsService;
  let shippingOptionsFactory: ShippingOptionsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShippingOptionsService,
        ShippingOptionsFactory,
      ],
    });
    shippingOptionsService = TestBed.inject(ShippingOptionsService);
    shippingOptionsFactory = TestBed.inject(ShippingOptionsFactory);
  });

  it('should be created', () => {
    expect(shippingOptionsService).toBeTruthy();
  });

  describe('getShippingOptions', () => {

    it('should return shippingOptions', () => {
      expect(shippingOptionsService.getShippingOptions()).toEqual(shippingOptionsFactory.create());
    });
  });
});
