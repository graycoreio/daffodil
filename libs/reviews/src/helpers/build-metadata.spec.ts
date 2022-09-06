import { TestBed } from '@angular/core/testing';

import {
  DaffProductReviewsMetadata,
  DaffProductReviewsCollectionRequest,
} from '@daffodil/reviews';
import { DaffProductReviewsCollectionRequestFactory } from '@daffodil/reviews/testing';

import { daffReviewsCollectionBuildMetadataFromRequest } from './build-metadata';

describe('@daffodil/core | daffReviewsCollectionBuildMetadataFromRequest', () => {
  let request: DaffProductReviewsCollectionRequest;
  let result: Partial<DaffProductReviewsMetadata>;
  let requestFactory: DaffProductReviewsCollectionRequestFactory;

  beforeEach(() => {
    requestFactory = TestBed.inject(DaffProductReviewsCollectionRequestFactory);

    request = requestFactory.create();
    result = daffReviewsCollectionBuildMetadataFromRequest(request);
  });

  it('should set fields from the request', () => {
    expect(result.appliedSortDirection).toEqual(request.appliedSortDirection);
    expect(result.appliedSortOption).toEqual(request.appliedSortOption);
    expect(result.currentPage).toEqual(request.currentPage);
    expect(result.pageSize).toEqual(request.pageSize);
    expect(result.filter).toEqual(request.filter);
  });
});
