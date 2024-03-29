import { TestBed } from '@angular/core/testing';

import { DaffOrderShipmentItem } from '@daffodil/order';

import { DaffOrderShipmentItemFactory } from './order-shipment-item.factory';

describe('@daffodil/order/testing | DaffOrderShipmentItemFactory', () => {
  let factory: DaffOrderShipmentItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderShipmentItemFactory],
    });

    factory = TestBed.inject(DaffOrderShipmentItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffOrderShipmentItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffOrderShipmentItem with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.item).toBeDefined();
      expect(result.qty).toBeDefined();
    });
  });
});
