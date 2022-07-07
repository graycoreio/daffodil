import { TestBed } from '@angular/core/testing';

import { DaffProductCollectionRequest } from '@daffodil/product';

import { DaffProductCollectionRequestFactory } from './request.factory';

describe('@daffodil/product/testing | DaffProductCollectionRequestFactory', () => {
  let factory: DaffProductCollectionRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffProductCollectionRequestFactory,
      ],
    });

    factory = TestBed.inject(DaffProductCollectionRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductCollectionRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffProductCollectionRequest with all required fields defined', () => {
      expect(result.filterRequests).toBeDefined();
    });
  });
});
