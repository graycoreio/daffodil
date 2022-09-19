import { TestBed } from '@angular/core/testing';

import {
  DaffCollectionRequest,
  DaffCollectionMetadata,
  daffFiltersToRequests,
} from '@daffodil/core';
import { DaffCollectionMetadataFactory } from '@daffodil/core/testing';

import { daffCollectionBuildRequestFromMetadata } from './build-request';

describe('@daffodil/core | daffCollectionBuildRequestFromMetadata', () => {
  let metadata: DaffCollectionMetadata;
  let result: Partial<DaffCollectionRequest>;
  let metadataFactory: DaffCollectionMetadataFactory;

  beforeEach(() => {
    metadataFactory = TestBed.inject(DaffCollectionMetadataFactory);

    metadata = metadataFactory.create();
    result = daffCollectionBuildRequestFromMetadata(metadata);
  });

  it('should set fields from the metadata', () => {
    expect(result.appliedSortDirection).toEqual(metadata.appliedSortDirection);
    expect(result.appliedSortOption).toEqual(metadata.appliedSortOption);
    expect(result.currentPage).toEqual(metadata.currentPage);
    expect(result.pageSize).toEqual(metadata.pageSize);
    expect(result.filterRequests).toEqual(daffFiltersToRequests(metadata.filters));
  });
});
