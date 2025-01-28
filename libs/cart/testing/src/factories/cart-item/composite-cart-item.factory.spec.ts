import { TestBed } from '@angular/core/testing';

import { DaffCompositeCartItem } from '@daffodil/cart';

import { DaffCompositeCartItemFactory } from './composite-cart-item.factory';

describe('Cart | Testing | Factories | CompositeCartItemFactory', () => {

  let compositeCartItemFactory: DaffCompositeCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCompositeCartItemFactory],
    });

    compositeCartItemFactory = TestBed.inject(DaffCompositeCartItemFactory);
  });

  it('should be created', () => {
    expect(compositeCartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCompositeCartItem;

    beforeEach(() => {
      result = compositeCartItemFactory.create();
    });

    it('should return a DaffCompositeCartItem with all required fields defined', () => {
      expect(result.id).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.image).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.options[0].id).not.toBeNull();
      expect(result.options[0].option_label).not.toBeNull();
      expect(result.options[0].value_label).not.toBeNull();
    });
  });
});
