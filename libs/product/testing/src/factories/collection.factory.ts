import { Injectable } from '@angular/core';

import {
  DaffCollectionMetadataFactory,
  DaffModelFactory,
  MockCollection,
} from '@daffodil/core/testing';
import {
  DaffProduct,
  DaffProductCollection,
} from '@daffodil/product';

import { DaffProductKindFactory } from './kind.factory';

/**
 * Mocked {@link DaffProductCollection} object.
 */
export class MockProductCollection extends MockCollection<DaffProduct> implements DaffProductCollection {
  constructor(
    productFactory: DaffProductKindFactory,
    metadataFactory: DaffCollectionMetadataFactory,
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
    metadataFactory: DaffCollectionMetadataFactory,
  ) {
    super(MockProductCollection, productFactory, metadataFactory);
  }
}
