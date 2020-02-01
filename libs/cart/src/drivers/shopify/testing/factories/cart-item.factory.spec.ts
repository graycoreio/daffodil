import { TestBed } from '@angular/core/testing';

import { CartItem } from '../../models/cart-item';
import { CartItemFactory } from './cart-item.factory';

describe('Driver | Shopify | Cart | Testing | Factories | CartItemFactory', () => {
  let cartItemFactory: CartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartItemFactory]
    });

    cartItemFactory = TestBed.get(CartItemFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: CartItem;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartItem with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.quantity).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.variant).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: CartItem[];

    it('should create as many cart shipping rates as desired', () => {
      result = cartItemFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartItemFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
