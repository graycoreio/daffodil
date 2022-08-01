import { TestBed } from '@angular/core/testing';

import {
  DaffProductCollectionRequest,
  DaffProductCollectionMetadata,
  daffProductFiltersToRequests,
} from '@daffodil/product';
import { DaffProductCollectionMetadataFactory } from '@daffodil/product/testing';

import { daffProductCollectionBuildRequestFromMetadata } from './build-request';

describe('@daffodil/product | daffProductCollectionBuildRequestFromMetadata', () => {
  let metadata: DaffProductCollectionMetadata;
  let result: Partial<DaffProductCollectionRequest>;
  let metadataFactory: DaffProductCollectionMetadataFactory;

  beforeEach(() => {
    metadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);

    metadata = metadataFactory.create();
    result = daffProductCollectionBuildRequestFromMetadata(metadata);
  });

  it('should set fields from the metadata', () => {
    expect(result.appliedSortDirection).toEqual(metadata.appliedSortDirection);
    expect(result.appliedSortOption).toEqual(metadata.appliedSortOption);
    expect(result.currentPage).toEqual(metadata.currentPage);
    expect(result.pageSize).toEqual(metadata.pageSize);
    expect(result.filterRequests).toEqual(daffProductFiltersToRequests(metadata.filters));
  });
});
