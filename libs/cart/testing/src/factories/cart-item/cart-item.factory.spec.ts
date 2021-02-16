import { TestBed } from '@angular/core/testing';

import { DaffCartItem } from '@daffodil/cart';

import { DaffCartItemFactory } from './cart-item.factory';

describe('Cart | Testing | Factories | CartItemFactory', () => {

  let cartItemFactory: DaffCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartItemFactory]
    });

    cartItemFactory = TestBed.inject(DaffCartItemFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCartItem;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartItem with all required fields defined', () => {
      expect(result.item_id).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.image).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.in_stock).not.toBeNull();
      expect(result.discounts).not.toBeNull();
    });

    it('should set the sum of discounts to be less or equal to than price', () => {
      expect(result.discounts.reduce((acc, discount) => acc + discount.amount, 0)).toBeLessThanOrEqual(result.price);
    });
  });
});
