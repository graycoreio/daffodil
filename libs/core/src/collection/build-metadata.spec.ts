import { TestBed } from '@angular/core/testing';

import {
  DaffCollectionMetadata,
  DaffCollectionRequest,
} from '@daffodil/core';
import { DaffCollectionRequestFactory } from '@daffodil/core/testing';

import { daffCollectionBuildMetadataFromRequest } from './build-metadata';

describe('@daffodil/core | daffCollectionBuildMetadataFromRequest', () => {
  let request: DaffCollectionRequest;
  let result: Partial<DaffCollectionMetadata>;
  let requestFactory: DaffCollectionRequestFactory;

  beforeEach(() => {
    requestFactory = TestBed.inject(DaffCollectionRequestFactory);

    request = requestFactory.create();
    result = daffCollectionBuildMetadataFromRequest(request);
  });

  it('should set fields from the request', () => {
    expect(result.appliedSortDirection).toEqual(request.appliedSortDirection);
    expect(result.appliedSortOption).toEqual(request.appliedSortOption);
    expect(result.currentPage).toEqual(request.currentPage);
    expect(result.pageSize).toEqual(request.pageSize);
  });
});
