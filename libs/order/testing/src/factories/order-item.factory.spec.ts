import { TestBed } from '@angular/core/testing';

import { DaffOrderItem } from '@daffodil/order';

import { DaffOrderItemFactory } from './order-item.factory';

describe('@daffodil/order/testing | OrderItemFactory', () => {

  let orderItemFactory: DaffOrderItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderItemFactory],
    });

    orderItemFactory = TestBed.inject(DaffOrderItemFactory);
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
      expect(result.id).not.toBeNull();
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
      expect(result.image).not.toBeNull();
      expect(result.image.id).not.toBeNull();
      expect(result.image.label).not.toBeNull();
      expect(result.image.url).not.toBeNull();
      expect(result.type).not.toBeNull();
    });

    it('should set total_discount to be less than or equal to price', () => {
      expect(result.discount_amount).toBeLessThanOrEqual(result.price);
    });
  });
});
