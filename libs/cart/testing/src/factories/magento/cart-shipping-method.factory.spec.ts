import { TestBed } from '@angular/core/testing';

import { MagentoCartShippingMethodFactory } from './cart-shipping-method.factory';
import { MagentoCartShippingMethod } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartShippingMethodFactory', () => {
  let factory: MagentoCartShippingMethodFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartShippingMethodFactory]
    });

    factory = TestBed.get(MagentoCartShippingMethodFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartShippingMethod;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartShippingMethod with all required fields defined', () => {
      expect(result.carrier_code).toBeDefined();
      expect(result.carrier_title).toBeDefined();
      expect(result.method_title).toBeDefined();
      expect(result.method_code).toBeDefined();
      expect(result.amount).toBeDefined();
    });
  });
});
