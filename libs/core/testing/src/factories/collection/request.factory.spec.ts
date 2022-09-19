import { TestBed } from '@angular/core/testing';

import { DaffCollectionRequest } from '@daffodil/core';

import { DaffCollectionRequestFactory } from './request.factory';

describe('@daffodil/core/testing | DaffCollectionRequestFactory', () => {
  let factory: DaffCollectionRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCollectionRequestFactory,
      ],
    });

    factory = TestBed.inject(DaffCollectionRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCollectionRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffCollectionRequest with all required fields defined', () => {
      expect(result.appliedSortDirection).toBeDefined();
      expect(result.appliedSortOption).toBeDefined();
      expect(result.currentPage).toBeDefined();
      expect(result.pageSize).toBeDefined();
      expect(result.filterRequests).toBeDefined();
    });
  });
});
