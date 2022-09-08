import { TestBed } from '@angular/core/testing';

import {
  DaffProductReviewsCollectionRequest,
  DaffProductReviewsMetadata,
} from '@daffodil/reviews';
import { DaffProductReviewsMetadataFactory } from '@daffodil/reviews/testing';

import { daffReviewsCollectionBuildRequestFromMetadata } from './build-request';

describe('@daffodil/core | daffReviewsCollectionBuildRequestFromMetadata', () => {
  let metadata: DaffProductReviewsMetadata;
  let result: Partial<DaffProductReviewsCollectionRequest>;
  let metadataFactory: DaffProductReviewsMetadataFactory;

  beforeEach(() => {
    metadataFactory = TestBed.inject(DaffProductReviewsMetadataFactory);

    metadata = metadataFactory.create();
    result = daffReviewsCollectionBuildRequestFromMetadata(metadata);
  });

  it('should set fields from the metadata', () => {
    expect(result.appliedSortDirection).toEqual(metadata.appliedSortDirection);
    expect(result.appliedSortOption).toEqual(metadata.appliedSortOption);
    expect(result.currentPage).toEqual(metadata.currentPage);
    expect(result.pageSize).toEqual(metadata.pageSize);
    expect(result.pageSize).toEqual(metadata.pageSize);
  });
});
