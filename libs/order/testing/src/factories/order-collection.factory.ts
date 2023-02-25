import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { daffIdentifiableArrayToDict } from '@daffodil/core';
import {
  DaffCollectionMetadataFactory,
  DaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';

import { DaffOrderFactory } from './order.factory';

/**
 * Mocked {@link DaffOrderCollection} object.
 */
export class MockOrderCollection implements DaffOrderCollection {
  metadata: DaffOrderCollection['metadata'];
  data: DaffOrderCollection['data'];

  constructor(
    protected orderFactory: DaffOrderFactory,
    protected metadataFactory: DaffCollectionMetadataFactory,
  ) {
    this.data = this.createOrders();

    const orders = Object.values(this.data);
    this.metadata = this.metadataFactory.create({
      count: orders.length,
      ids: orders.map(({ id }) => id),
    });
  }

  private createOrders(): Record<DaffOrder['id'], DaffOrder> {
    return daffIdentifiableArrayToDict(this.orderFactory.createMany(faker.datatype.number({ min: 3, max: 15 })));
  }
}

/**
 * Factory for creating DaffOrderCollections.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderCollectionFactory extends DaffModelFactory<DaffOrderCollection>{
  constructor(
    orderFactory: DaffOrderFactory,
    metadataFactory: DaffCollectionMetadataFactory,
  ) {
    super(MockOrderCollection, orderFactory, metadataFactory);
  }
}
