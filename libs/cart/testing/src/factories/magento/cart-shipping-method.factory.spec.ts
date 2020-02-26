import { TestBed } from '@angular/core/testing';

import { MagentoCartShippingMethodFactory } from './cart-shipping-method.factory';
import { MagentoCartShippingMethod } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartShippingMethodFactory', () => {
  let cartItemFactory: MagentoCartShippingMethodFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartShippingMethodFactory]
    });

    cartItemFactory = TestBed.get(MagentoCartShippingMethodFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartShippingMethod;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartShippingMethod with all required fields defined', () => {
      expect(result.carrier_code).toBeDefined();
      expect(result.carrier_title).toBeDefined();
      expect(result.method_title).toBeDefined();
      expect(result.method_code).toBeDefined();
      expect(result.amount).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoCartShippingMethod[];

    it('should create as many cart items as desired', () => {
      const spy = spyOn(cartItemFactory, 'create');

      result = cartItemFactory.createMany(2);
      expect(result.length).toEqual(2);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(2);

      spy.calls.reset();

      result = cartItemFactory.createMany(3);
      expect(result.length).toEqual(3);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(3);
    });
  })
});
