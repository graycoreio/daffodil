import { Injectable } from '@angular/core';

import {
  DaffModelFactory,
  MockCollection,
} from '@daffodil/core/testing';
import {
  DaffProduct,
  DaffProductCollection,
  DaffProductCollectionMetadata,
} from '@daffodil/product';

import { DaffProductKindFactory } from '../kind.factory';
import { DaffProductCollectionMetadataFactory } from './metadata.factory';

/**
 * Mocked {@link DaffProductCollection} object.
 */
export class MockProductCollection extends MockCollection<DaffProduct> implements DaffProductCollection {
  metadata: DaffProductCollectionMetadata;

  constructor(
    productFactory: DaffProductKindFactory,
    metadataFactory: DaffProductCollectionMetadataFactory,
  ) {
    super(
      productFactory,
      metadataFactory,
    );
  }
}

/**
 * Factory for creating {@link DaffProductCollection}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCollectionFactory extends DaffModelFactory<DaffProductCollection> {
  constructor(
    productFactory: DaffProductKindFactory,
    metadataFactory: DaffProductCollectionMetadataFactory,
  ) {
    super(MockProductCollection, productFactory, metadataFactory);
  }
}
