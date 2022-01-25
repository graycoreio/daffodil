import { TestBed } from '@angular/core/testing';

import { MagentoBundleCartItem } from '@daffodil/cart/driver/magento';

import { MagentoBundleCartItemFactory } from './bundle-cart-item.factory';

describe('Cart | Testing | Factories | CartItemFactory', () => {
  let factory: MagentoBundleCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoBundleCartItemFactory],
    });

    factory = TestBed.inject(MagentoBundleCartItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoBundleCartItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a BundleCartItem with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.prices.price).toBeDefined();
      expect(result.prices.row_total).toBeDefined();
      expect(result.product).toBeDefined();
      expect(result.quantity).toBeDefined();
      expect(result.bundle_options[0].label).toBeDefined();
      expect(result.bundle_options[0].type).toBeDefined();
      expect(result.bundle_options[0].values).toBeDefined();
      expect(result.bundle_options[0].uid).toBeDefined();
      expect(result.product.items[0].uid).toBeDefined();
      expect(result.product.items[0].options[0].uid).toBeDefined();
      expect(result.product.items[0].options[0].product.stock_status).toBeDefined();
    });

    it('should pull product item and option UIDs from the bundle options', () => {
      expect(result.product.items[0].uid).toEqual(result.bundle_options[0].uid);
      expect(result.product.items[0].options[0].uid).toEqual(result.bundle_options[0].values[0].uid);
    });
  });
});
