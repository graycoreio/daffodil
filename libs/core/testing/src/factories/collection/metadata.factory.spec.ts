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
      expect(result.current_page).toBeDefined();
      expect(result.total_pages).toBeDefined();
      expect(result.page_size).toBeDefined();
      expect(result.applied_sort_direction).toBeDefined();
      expect(result.applied_sort_option).toBeDefined();
      expect(result.sort_options).toBeDefined();
      expect(result.ids).toBeDefined();
    });
  });
});
