import { TestBed } from '@angular/core/testing';

import { MagentoCartItemFactory } from './cart-item.factory';
import { MagentoCartItem } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartItemFactory', () => {
  let cartItemFactory: MagentoCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartItemFactory]
    });

    cartItemFactory = TestBed.get(MagentoCartItemFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartItem;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartItem with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.prices.discounts).toBeDefined();
      expect(result.prices.price).toBeDefined();
      expect(result.prices.row_total).toBeDefined();
      expect(result.prices.row_total_including_tax).toBeDefined();
      expect(result.prices.total_item_discount).toBeDefined();
      expect(result.product).toBeDefined();
      expect(result.quantity).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoCartItem[];

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
