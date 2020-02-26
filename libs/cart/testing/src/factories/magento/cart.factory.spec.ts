import { TestBed } from '@angular/core/testing';

import { MagentoCartFactory } from './cart.factory';
import { MagentoCart } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartFactory', () => {
  let cartItemFactory: MagentoCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartFactory]
    });

    cartItemFactory = TestBed.get(MagentoCartFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCart;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a Cart with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.applied_coupons).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.billing_address).toBeDefined();
      expect(result.shipping_addresses).toBeDefined();
      expect(result.available_payment_methods).toBeDefined();
      expect(result.selected_payment_method).toBeDefined();
      expect(result.prices.subtotal_excluding_tax).toBeDefined();
      expect(result.prices.grand_total).toBeDefined();
      expect(result.prices.subtotal_including_tax).toBeDefined();
      expect(result.prices.subtotal_with_discount_excluding_tax).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoCart[];

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
