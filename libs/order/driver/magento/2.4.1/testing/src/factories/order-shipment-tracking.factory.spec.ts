import { TestBed } from '@angular/core/testing';

import { MagentoOrderShipmentTracking } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderShipmentTrackingFactory } from './order-shipment-tracking.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderShipmentTrackingFactory', () => {
  let factory: MagentoOrderShipmentTrackingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderShipmentTrackingFactory],
    });

    factory = TestBed.inject(MagentoOrderShipmentTrackingFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderShipmentTracking;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderShipmentTracking with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.number).toBeDefined();
      expect(result.carrier).toBeDefined();
      expect(result.title).toBeDefined();
    });
  });
});
