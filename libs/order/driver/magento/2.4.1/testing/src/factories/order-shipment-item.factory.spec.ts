import { TestBed } from '@angular/core/testing';

import { MagentoOrderShipmentItem } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderShipmentItemFactory } from './order-shipment-item.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderShipmentItemFactory', () => {
  let factory: MagentoOrderShipmentItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderShipmentItemFactory],
    });

    factory = TestBed.inject(MagentoOrderShipmentItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderShipmentItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderShipmentItem with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.order_item).toBeDefined();
      expect(result.quantity_shipped).toBeDefined();
    });
  });
});
