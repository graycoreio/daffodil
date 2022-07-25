import { TestBed } from '@angular/core/testing';

import { DaffProductCollectionMetadata } from '@daffodil/product';

import { DaffProductCollectionMetadataFactory } from './metadata.factory';

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
      expect(result.filters).toBeDefined();
    });
  });
});
