import { TestBed } from '@angular/core/testing';

import { DaffConfigurableCartItem } from '@daffodil/cart';

import { DaffConfigurableCartItemFactory } from './configurable-cart-item.factory';

describe('Cart | Testing | Factories | ConfigurableCartItemFactory', () => {

  let configurableCartItemFactory: DaffConfigurableCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffConfigurableCartItemFactory],
    });

    configurableCartItemFactory = TestBed.inject(DaffConfigurableCartItemFactory);
  });

  it('should be created', () => {
    expect(configurableCartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffConfigurableCartItem;

    beforeEach(() => {
      result = configurableCartItemFactory.create();
    });

    it('should return a DaffConfigurableCartItem with all required fields defined', () => {
      expect(result.id).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.image).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.attributes[0].attribute_label).not.toBeNull();
      expect(result.attributes[0].value_label).not.toBeNull();
    });
  });
});
