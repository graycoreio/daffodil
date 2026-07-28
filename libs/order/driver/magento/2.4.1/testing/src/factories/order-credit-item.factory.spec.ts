import { TestBed } from '@angular/core/testing';

import { MagentoOrderCreditItem } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderCreditItemFactory } from './order-credit-item.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderCreditItemFactory', () => {
  let factory: MagentoOrderCreditItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderCreditItemFactory],
    });

    factory = TestBed.inject(MagentoOrderCreditItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderCreditItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderCreditItem with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.order_item).toBeDefined();
      expect(result.quantity_refunded).toBeDefined();
    });
  });
});
