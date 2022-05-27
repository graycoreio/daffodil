import { TestBed } from '@angular/core/testing';

import { DaffProductCollectionMetadata } from '@daffodil/product';

import { DaffProductCollectionMetadataFactory } from './collection-metadata.factory';

describe('@daffodil/product/testing | DaffProductCollectionMetadataFactory', () => {
  let factory: DaffProductCollectionMetadataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffProductCollectionMetadataFactory,
      ],
    });

    factory = TestBed.inject(DaffProductCollectionMetadataFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductCollectionMetadata;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffProductCollectionMetadata with all required fields defined', () => {
      expect(result.total_products).toBeDefined();
      expect(result.current_page).toBeDefined();
      expect(result.total_pages).toBeDefined();
      expect(result.page_size).toBeDefined();
      expect(result.applied_sort_direction).toBeDefined();
      expect(result.applied_sort_option).toBeDefined();
      expect(result.sort_options).toBeDefined();
      expect(result.filters).toBeDefined();
    });
  });
});
