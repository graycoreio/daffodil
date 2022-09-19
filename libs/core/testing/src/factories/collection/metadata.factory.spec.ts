import { TestBed } from '@angular/core/testing';

import { DaffCollectionMetadata } from '@daffodil/core';

import { DaffCollectionMetadataFactory } from './metadata.factory';

describe('@daffodil/core/testing | DaffCollectionMetadataFactory', () => {
  let factory: DaffCollectionMetadataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCollectionMetadataFactory,
      ],
    });

    factory = TestBed.inject(DaffCollectionMetadataFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCollectionMetadata;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffCollectionMetadata with all required fields defined', () => {
      expect(result.count).toBeDefined();
      expect(result.currentPage).toBeDefined();
      expect(result.totalPages).toBeDefined();
      expect(result.pageSize).toBeDefined();
      expect(result.appliedSortDirection).toBeDefined();
      expect(result.appliedSortOption).toBeDefined();
      expect(result.sortOptions).toBeDefined();
      expect(result.ids).toBeDefined();
      expect(result.filters).toBeDefined();
    });
  });
});
