import { TestBed } from '@angular/core/testing';

import { DaffCartItem } from '@daffodil/cart';
import { DaffOperationEntity } from '@daffodil/core/state';

import { DaffStatefulCartItemFactory } from './stateful-cart-item.factory';

describe('Cart | State | Testing | Factories | StatefulCartItemFactory', () => {

  let statefulCartItemFactory: DaffStatefulCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffStatefulCartItemFactory],
    });

    statefulCartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);
  });

  it('should be created', () => {
    expect(statefulCartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOperationEntity<DaffCartItem>;

    beforeEach(() => {
      result = statefulCartItemFactory.create();
    });

    it('should return a StatefulCartItem with all required fields defined', () => {
      expect(result.id).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.image).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.in_stock).not.toBeNull();
      expect(result.daffState).not.toBeNull();
      expect(result.daffErrors).not.toBeNull();
    });
  });
});
