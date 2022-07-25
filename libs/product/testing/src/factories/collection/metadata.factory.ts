import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  DaffNumericallyPaginableFactory,
  DaffSortableFactory,
  MockCollectionMetadata,
} from '@daffodil/core/testing';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
  daffProductFilterArrayToDict,
} from '@daffodil/product';

import { DaffProductFilterFactory } from '../filters/public_api';

/**
 * Mocked {@link DaffProductCollectionMetadata} object.
 */
export class MockProductCollectionMetadata extends MockCollectionMetadata implements DaffProductCollectionMetadata {
  filters: Record<DaffProductFilter['name'], DaffProductFilter>;

  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
    filterFactory: DaffProductFilterFactory,
  ) {
    super(
      pageInfoFactory,
      sortFieldsFactory,
    );

    this.filters = daffProductFilterArrayToDict(filterFactory.createMany(faker.random.number({ min: 1, max: 5 })));
  }
}

/**
 * Factory for creating {@link DaffProductCollectionMetadata}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCollectionMetadataFactory extends DaffModelFactory<DaffProductCollectionMetadata> {
  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
    filterFactory: DaffProductFilterFactory,
  ) {
    super(MockProductCollectionMetadata, pageInfoFactory, sortFieldsFactory, filterFactory);
  }
}
