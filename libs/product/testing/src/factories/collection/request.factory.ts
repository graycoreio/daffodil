import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  MockCollectionRequest,
} from '@daffodil/core/testing';
import {
  DaffProductCollectionRequest,
  DaffProductFilterRequest,
} from '@daffodil/product';

import { DaffProductFilterRequestFactory } from '../filters/public_api';

/**
 * Mocked {@link DaffProductCollectionRequest} object.
 */
export class MockProductCollectionRequest extends MockCollectionRequest implements DaffProductCollectionRequest {
  filterRequests = this.createFilterRequests();

  constructor(
    private filterRequestFactory: DaffProductFilterRequestFactory,
  ) {
    super();
  }

  private createFilterRequests(): DaffProductFilterRequest[] {
    return this.filterRequestFactory.createMany(faker.random.number({ min: 1, max: 5 }));
  }
}

/**
 * Factory for creating {@link DaffProductCollectionRequest}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCollectionRequestFactory extends DaffModelFactory<DaffProductCollectionRequest> {
  constructor(
    filterRequestFactory: DaffProductFilterRequestFactory,
  ) {
    super(MockProductCollectionRequest, filterRequestFactory);
  }
}
