import { TestBed } from '@angular/core/testing';

import { DaffStatefulCartItem } from '@daffodil/cart/state';

import { DaffStatefulCartItemFactory } from './stateful-cart-item.factory';

describe('Cart | State | Testing | Factories | StatefulCartItemFactory', () => {

  let statefulCartItemFactory: DaffStatefulCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffStatefulCartItemFactory]
    });

    statefulCartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);
  });

  it('should be created', () => {
    expect(statefulCartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffStatefulCartItem;

    beforeEach(() => {
      result = statefulCartItemFactory.create();
    });

    it('should return a StatefulCartItem with all required fields defined', () => {
      expect(result.item_id).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.image).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.total_discount).not.toBeNull();
      expect(result.in_stock).not.toBeNull();
      expect(result.daffState).not.toBeNull();
    });

    it('should set total_discount to be less than price', () => {
      expect(result.total_discount).toBeLessThan(result.price);
    });
  });
});
