import { TestBed } from '@angular/core/testing';

import { MagentoOrderItem } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderItemFactory } from './order-item.factory';

describe('@daffodil/order/magento/2.4.1/testing | OrderItemFactory', () => {

  let orderItemFactory: MagentoOrderItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderItemFactory],
    });

    orderItemFactory = TestBed.inject(MagentoOrderItemFactory);
  });

  it('should be created', () => {
    expect(orderItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderItem;

    beforeEach(() => {
      result = orderItemFactory.create();
    });

    it('should return a MagentoOrderItem with all required fields defined', () => {
      expect(result.discounts).toBeDefined();
      expect(result.product_name).toBeDefined();
      expect(result.product_sale_price).toBeDefined();
      expect(result.product_sku).toBeDefined();
      expect(result.product_type).toBeDefined();
      expect(result.product_url_key).toBeDefined();
      expect(result.quantity_canceled).toBeDefined();
      expect(result.quantity_invoiced).toBeDefined();
      expect(result.quantity_ordered).toBeDefined();
      expect(result.quantity_refunded).toBeDefined();
      expect(result.quantity_returned).toBeDefined();
      expect(result.quantity_shipped).toBeDefined();
      expect(result.selected_options).toBeDefined();
      expect(result.entered_options).toBeDefined();
      expect(result.status).toBeDefined();
    });
  });
});
