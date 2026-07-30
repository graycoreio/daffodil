import { TestBed } from '@angular/core/testing';

import { MagentoOrderShipment } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderShipmentFactory } from './order-shipment.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderShipmentFactory', () => {
  let factory: MagentoOrderShipmentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderShipmentFactory],
    });

    factory = TestBed.inject(MagentoOrderShipmentFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderShipment;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderShipment with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.tracking).toBeDefined();
      expect(result.items).toBeDefined();
    });
  });
});
