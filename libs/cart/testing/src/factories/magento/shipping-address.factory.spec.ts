import { TestBed } from '@angular/core/testing';

import { MagentoShippingAddressFactory } from './shipping-address.factory';
import { MagentoShippingAddress } from '@daffodil/cart';

describe('Cart | Testing | Factories | ShippingAddressFactory', () => {
  let factory: MagentoShippingAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoShippingAddressFactory]
    });

    factory = TestBed.get(MagentoShippingAddressFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoShippingAddress;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a ShippingAddress with all required fields defined', () => {
      expect(result.available_shipping_methods).toBeDefined();
      expect(result.selected_shipping_method).toBeDefined();
    });
  });
});
