import { TestBed } from '@angular/core/testing';

import { MagentoOrderInvoiceItem } from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderInvoiceItemFactory } from './order-invoice-item.factory';

describe('@daffodil/order/magento/2-4-1/testing | MagentoOrderInvoiceItemFactory', () => {
  let factory: MagentoOrderInvoiceItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderInvoiceItemFactory],
    });

    factory = TestBed.inject(MagentoOrderInvoiceItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderInvoiceItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderInvoiceItem with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.order_item).toBeDefined();
      expect(result.quantity_invoiced).toBeDefined();
    });
  });
});
