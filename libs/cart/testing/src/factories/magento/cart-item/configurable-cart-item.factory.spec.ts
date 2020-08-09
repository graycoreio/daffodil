import { TestBed } from '@angular/core/testing';

import { MagentoConfigurableCartItem } from '@daffodil/cart';
import { MagentoConfigurableCartItemFactory } from './configurable-cart-item.factory';

describe('Cart | Testing | Factories | CartItemFactory', () => {
  let factory: MagentoConfigurableCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoConfigurableCartItemFactory]
    });

    factory = TestBed.get(MagentoConfigurableCartItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoConfigurableCartItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a ConfigurableCartItem with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.prices.price).toBeDefined();
      expect(result.prices.row_total).toBeDefined();
      expect(result.prices.row_total_including_tax).toBeDefined();
      expect(result.prices.total_item_discount).toBeDefined();
      expect(result.product).toBeDefined();
      expect(result.quantity).toBeDefined();
      expect(result.configurable_options[0].option_label).toBeDefined();
      expect(result.configurable_options[0].value_label).toBeDefined();
    });
  });
});
