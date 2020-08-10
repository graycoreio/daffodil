import { TestBed } from '@angular/core/testing';

import { DaffConfigurableCartItemFactory } from './configurable-cart-item.factory';
import { DaffConfigurableCartItem } from '@daffodil/cart';

describe('Cart | Testing | Factories | ConfigurableCartItemFactory', () => {

  let configurableCartItemFactory: DaffConfigurableCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffConfigurableCartItemFactory]
    });

    configurableCartItemFactory = TestBed.get(DaffConfigurableCartItemFactory);
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
      expect(result.attributes[0].attribute_label).not.toBeNull();
      expect(result.attributes[0].value_label).not.toBeNull();
    });

    it('should set total_discount to be less than price', () => {
      expect(result.total_discount).toBeLessThan(result.price);
    });
  });

  describe('createMany', () => {
    let result: DaffConfigurableCartItem[];

    it('should create as many cart items as desired', () => {
      const spy = spyOn(configurableCartItemFactory, 'create');

      result = configurableCartItemFactory.createMany(2);
      expect(result.length).toEqual(2);
      expect(configurableCartItemFactory.create).toHaveBeenCalledTimes(2);


      spy.calls.reset();

      result = configurableCartItemFactory.createMany(3);
      expect(result.length).toEqual(3);
      expect(configurableCartItemFactory.create).toHaveBeenCalledTimes(3);
    });
  })
});
