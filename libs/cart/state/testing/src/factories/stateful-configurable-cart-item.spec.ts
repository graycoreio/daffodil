import { TestBed } from '@angular/core/testing';

import { DaffConfigurableCartItem } from '@daffodil/cart';
import { DaffOperationEntity } from '@daffodil/core/state';

import { DaffStatefulConfigurableCartItemFactory } from './stateful-configurable-cart-item.factory';

describe('Cart | State | Testing | Factories | StatefulConfigurableCartItemFactory', () => {

  let statefulConfigurableCartItemFactory: DaffStatefulConfigurableCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffStatefulConfigurableCartItemFactory],
    });

    statefulConfigurableCartItemFactory = TestBed.inject(DaffStatefulConfigurableCartItemFactory);
  });

  it('should be created', () => {
    expect(statefulConfigurableCartItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOperationEntity<DaffConfigurableCartItem>;

    beforeEach(() => {
      result = statefulConfigurableCartItemFactory.create();
    });

    it('should return a StatefulConfigurableCartItem with all required fields defined', () => {
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
      expect(result.daffState).not.toBeNull();
      expect(result.daffErrors).not.toBeNull();
    });
  });
});
