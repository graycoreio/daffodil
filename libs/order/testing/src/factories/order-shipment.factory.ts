import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffOrderShipment,
  DaffOrderShipmentItem,
  DaffOrderShipmentTracking,
} from '@daffodil/order';

import { DaffOrderShipmentItemFactory } from './order-shipment-item.factory';
import { DaffOrderShipmentTrackingFactory } from './order-shipment-tracking.factory';

export class MockOrderShipment implements DaffOrderShipment {
  tracking = this.createTracking();
  items = this.createItems();
  carrier = faker.lorem.word();
  carrier_title = faker.lorem.word();
  code = faker.lorem.word();
  method = faker.lorem.word();
  method_description = faker.lorem.word();

  constructor(
    private trackingFactory: DaffOrderShipmentTrackingFactory,
    private itemFactory: DaffOrderShipmentItemFactory,
  ) {}

  private createTracking(): DaffOrderShipmentTracking[] {
    return this.trackingFactory.createMany(faker.number.int({ min: 1, max: 3 }));
  }

  private createItems(): DaffOrderShipmentItem[] {
    return this.itemFactory.createMany(faker.number.int({ min: 1, max: 3 }));
  }
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShipmentFactory extends DaffModelFactory<DaffOrderShipment> {
  constructor(
    trackingFactory: DaffOrderShipmentTrackingFactory,
    itemFactory: DaffOrderShipmentItemFactory,
  ) {
    super(MockOrderShipment, trackingFactory, itemFactory);
  }
}
