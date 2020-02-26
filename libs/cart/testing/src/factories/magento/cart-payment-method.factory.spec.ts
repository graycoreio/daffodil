import { TestBed } from '@angular/core/testing';

import { MagentoCartPaymentMethodFactory } from './cart-payment-method.factory';
import { MagentoCartPaymentMethod } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartPaymentMethodFactory', () => {
  let cartItemFactory: MagentoCartPaymentMethodFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartPaymentMethodFactory]
    });

    cartItemFactory = TestBed.get(MagentoCartPaymentMethodFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartPaymentMethod;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartPaymentMethod with all required fields defined', () => {
      expect(result.code).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.purchase_order_number).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoCartPaymentMethod[];

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
