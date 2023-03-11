import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import {
  DaffCollectionRequest,
  DaffFilterRequest,
  DaffSortDirectionEnum,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffFilterRequestFactory } from '../filters/public_api';

/**
 * Mocked {@link DaffCollectionRequest} object.
 */
export class MockCollectionRequest implements DaffCollectionRequest {
  currentPage = faker.datatype.number({ min: 1, max: 100 });
  appliedSortDirection = faker.helpers.arrayElement([DaffSortDirectionEnum.Ascending, DaffSortDirectionEnum.Descending]);
  pageSize = faker.datatype.number({ min: 1, max: 100 });
  appliedSortOption = faker.random.word();
  filterRequests = this.createFilterRequests();

  constructor(
    private filterRequestFactory: DaffFilterRequestFactory,
  ) {}

  private createFilterRequests(): DaffFilterRequest[] {
    return this.filterRequestFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  }
}

/**
 * Factory for creating {@link DaffCollectionRequest}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCollectionRequestFactory extends DaffModelFactory<DaffCollectionRequest> {
  constructor(
    filterRequestFactory: DaffFilterRequestFactory,
  ) {
    super(MockCollectionRequest, filterRequestFactory);
  }
}
