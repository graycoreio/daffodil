import {
  daffIdentifiableArrayToDict,
  DaffCollection,
  DaffCollectionMetadata,
  DaffIdentifiable,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffCollectionMetadataFactory } from './metadata.factory';

/**
 * Mocked {@link DaffCollection} object.
 *
 * It should be customized by passing the factory for the contained entity as the first constructor argument.
 */
export class MockCollection<T extends DaffIdentifiable = DaffIdentifiable> implements DaffCollection<T> {
  private _items = this.createItems();
  metadata = this.createMetadata();
  data = daffIdentifiableArrayToDict(this._items);

  constructor(
    private itemFactory: DaffModelFactory<T>,
    private metadataFactory: DaffCollectionMetadataFactory,
  ) {}

  private createItems(): T[] {
    return this.itemFactory.createMany();
  }

  private createMetadata(): DaffCollectionMetadata {
    return this.metadataFactory.create({
      ids: this._items.map(({ id }) => id),
      count: this._items.length,
    });
  }
}
