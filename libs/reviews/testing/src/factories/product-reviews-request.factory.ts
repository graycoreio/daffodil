import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  MockCollectionRequest,
} from '@daffodil/core/testing';
import { DaffProductReviewsCollectionRequest } from '@daffodil/reviews';

/**
 * Mocked {@link DaffProductReviewsCollectionRequest} object.
 */
export class MockProductReviewsRequest extends MockCollectionRequest implements DaffProductReviewsCollectionRequest {
  appliedFilter = faker.datatype.number({ min: 1, max: 100 });
}

/**
 * Factory for creating DaffProductReviewsCollectionRequests.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductReviewsCollectionRequestFactory extends DaffModelFactory<DaffProductReviewsCollectionRequest>{
  constructor() {
    super(MockProductReviewsRequest);
  }
}
