import { TestBed } from '@angular/core/testing';

import { DaffOrderShipmentTracking } from '@daffodil/order';

import { DaffOrderShipmentTrackingFactory } from './order-shipment-tracking.factory';

describe('Order | Testing | Factories | DaffOrderShipmentTrackingFactory', () => {
  let factory: DaffOrderShipmentTrackingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderShipmentTrackingFactory]
    });

    factory = TestBed.get(DaffOrderShipmentTrackingFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffOrderShipmentTracking;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffOrderShipmentTracking with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.tracking_number).toBeDefined();
      expect(result.tracking_url).toBeDefined();
      expect(result.carrier).toBeDefined();
      expect(result.carrier_logo).toBeDefined();
      expect(result.title).toBeDefined();
    });
  });
});
