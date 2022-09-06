import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  DaffNumericallyPaginableFactory,
  DaffSortableFactory,
  MockCollectionMetadata,
} from '@daffodil/core/testing';
import { DaffProductReviewsMetadata } from '@daffodil/reviews';

/**
 * Mocked {@link DaffProductReviewsMetadata} object.
 */
export class MockProductReviewsMetadata extends MockCollectionMetadata implements DaffProductReviewsMetadata {
  filter = faker.datatype.number({ min: 1, max: 100 });
}

/**
 * Factory for creating DaffProductReviewsMetadatas.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductReviewsMetadataFactory extends DaffModelFactory<DaffProductReviewsMetadata>{
  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
  ) {
    super(MockProductReviewsMetadata, pageInfoFactory, sortFieldsFactory);
  }
}
