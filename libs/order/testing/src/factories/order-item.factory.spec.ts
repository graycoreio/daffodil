import { TestBed } from '@angular/core/testing';

import { DaffOrderItemFactory } from './order-item.factory';
import { DaffOrderItem } from '@daffodil/order';

describe('Checkout | Testing | Order | Factories | OrderItemFactory', () => {

  let orderItemFactory: DaffOrderItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderItemFactory]
    });

    orderItemFactory = TestBed.get(DaffOrderItemFactory);
  });

  it('should be created', () => {
    expect(orderItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOrderItem;

    beforeEach(() => {
      result = orderItemFactory.create();
    });

    it('should return a DaffOrderItem with all required fields defined', () => {
      expect(result.item_id).not.toBeNull();
      expect(result.order_id).not.toBeNull();
      expect(result.qty_canceled).not.toBeNull();
      expect(result.qty_fulfilled).not.toBeNull();
      expect(result.qty_ordered).not.toBeNull();
      expect(result.created_at).not.toBeNull();
      expect(result.updated_at).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.weight).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.discount_percent).not.toBeNull();
      expect(result.discount_amount).not.toBeNull();
      expect(result.tax_percent).not.toBeNull();
      expect(result.tax_amount).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.row_total_with_discount).not.toBeNull();
      expect(result.row_weight).not.toBeNull();
      expect(result.tax_before_discount).not.toBeNull();
    });
  });

  describe('createMany', () => {
    let result: DaffOrderItem[];

    it('should create as many order items as desired', () => {
      const spy = spyOn(orderItemFactory, 'create');

      result = orderItemFactory.createMany(2);
      expect(result.length).toEqual(2);
      expect(orderItemFactory.create).toHaveBeenCalledTimes(2);


      spy.calls.reset();

      result = orderItemFactory.createMany(3);
      expect(result.length).toEqual(3);
      expect(orderItemFactory.create).toHaveBeenCalledTimes(3);
    });
  })
});
