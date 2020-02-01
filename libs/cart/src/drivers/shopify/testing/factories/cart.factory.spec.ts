import { TestBed } from '@angular/core/testing';

import { CartFactory } from './cart.factory';
import { Cart } from '../../models/cart';

describe('Driver | Shopify | Cart | Testing | Factories | CartFactory', () => {
  let cartFactory: CartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartFactory]
    });

    cartFactory = TestBed.get(CartFactory);
  });

  it('should be created', () => {
    expect(cartFactory).toBeTruthy();
  });

  describe('create', () => {
    let result : Cart;

    beforeEach(() => {
      result = cartFactory.create();
    });

    it('should return a Cart', () => {
      expect(result).toBeDefined();
    });

    it('should return a Cart with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.updatedAt).toBeDefined();
      expect(result.shippingAddress).toBeDefined();
      expect(result.shippingLine).toBeDefined();
      expect(result.currencyCode).toBeDefined();
      expect(result.totalPriceV2).toBeDefined();
      expect(result.subtotalPriceV2).toBeDefined();
      expect(result.lineItemsSubtotalPrice).toBeDefined();
      expect(result.lineItems).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: Cart[];

    it('should create as many carts as desired', () => {
      result = cartFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  })
});
