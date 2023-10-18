import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoOrderShipment,
  MagentoOrderShipmentItem,
  MagentoOrderShipmentTracking,
} from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderShipmentItemFactory } from './order-shipment-item.factory';
import { MagentoOrderShipmentTrackingFactory } from './order-shipment-tracking.factory';

export class MockOrderShipment implements MagentoOrderShipment {
  __typename: 'OrderShipment' = 'OrderShipment';
  tracking = this.createTracking();
  items = this.createItems();

  constructor(
    private trackingFactory: MagentoOrderShipmentTrackingFactory,
    private itemFactory: MagentoOrderShipmentItemFactory,
  ) {}

  private createTracking(): MagentoOrderShipmentTracking[] {
    return this.trackingFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  }

  private createItems(): MagentoOrderShipmentItem[] {
    return this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  }
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderShipmentFactory extends DaffModelFactory<MagentoOrderShipment> {
  constructor(
    trackingFactory: MagentoOrderShipmentTrackingFactory,
    itemFactory: MagentoOrderShipmentItemFactory,
  ) {
    super(MockOrderShipment, trackingFactory, itemFactory);
  }
}
