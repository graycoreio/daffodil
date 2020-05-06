import { TestBed } from '@angular/core/testing';

import { DaffOrderShipment } from '@daffodil/order';

import { DaffOrderShipmentFactory } from './order-shipment.factory';

describe('Order | Testing | Factories | DaffOrderShipmentFactory', () => {
  let factory: DaffOrderShipmentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderShipmentFactory]
    });

    factory = TestBed.get(DaffOrderShipmentFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffOrderShipment;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffOrderShipment with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.tracking).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.carrier).toBeDefined();
      expect(result.carrier_title).toBeDefined();
      expect(result.code).toBeDefined();
      expect(result.method).toBeDefined();
      expect(result.method_description).toBeDefined();
    });
  });
});
