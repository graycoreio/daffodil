import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCollectionRequest,
  DaffSortDirectionEnum,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';

/**
 * Mocked {@link DaffCollectionRequest} object.
 */
export class MockCollectionRequest implements DaffCollectionRequest {
  currentPage = faker.datatype.number({ min: 1, max: 100 });
  appliedSortDirection = faker.random.arrayElement([DaffSortDirectionEnum.Ascending, DaffSortDirectionEnum.Descending]);
  pageSize = faker.datatype.number({ min: 1, max: 100 });
  appliedSortOption = faker.random.word();
}

/**
 * Factory for creating {@link DaffCollectionRequest}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCollectionRequestFactory extends DaffModelFactory<DaffCollectionRequest> {
  constructor() {
    super(MockCollectionRequest);
  }
}
