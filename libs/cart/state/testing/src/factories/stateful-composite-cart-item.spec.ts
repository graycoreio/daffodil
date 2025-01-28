import { TestBed } from '@angular/core/testing';

import { DaffCompositeCartItem } from '@daffodil/cart';
import { DaffOperationEntity } from '@daffodil/core/state';

import { DaffStatefulCompositeCartItemFactory } from './stateful-composite-cart-item.factory';

describe('Cart | State | Testing | Factories | StatefulCompositeCartItemFactory', () => {

  let statefulCompositeCartItemFactory: DaffStatefulCompositeCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffStatefulCompositeCartItemFactory],
    });

    statefulCompositeCartItemFactory = TestBed.inject(DaffStatefulCompositeCartItemFactory);
  });

  it('should be created', () => {
    expect(statefulCompositeCartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOperationEntity<DaffCompositeCartItem>;

    beforeEach(() => {
      result = statefulCompositeCartItemFactory.create();
    });

    it('should return a StatefulCompositeCartItem with all required fields defined', () => {
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
      expect(result.daffState).not.toBeNull();
      expect(result.daffErrors).not.toBeNull();
    });
  });
});
