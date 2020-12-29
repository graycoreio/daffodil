import { TestBed } from '@angular/core/testing';

import { MagentoCartItem } from '@daffodil/cart/driver/magento';

import { MagentoCartItemFactory } from './cart-item.factory';

describe('Cart | Testing | Factories | CartItemFactory', () => {
  let factory: MagentoCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartItemFactory]
    });

    factory = TestBed.inject(MagentoCartItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartItem with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.prices.price).toBeDefined();
      expect(result.prices.row_total).toBeDefined();
      expect(result.prices.row_total_including_tax).toBeDefined();
      expect(result.prices.total_item_discount).toBeDefined();
      expect(result.product).toBeDefined();
      expect(result.quantity).toBeDefined();
    });
  });
});
