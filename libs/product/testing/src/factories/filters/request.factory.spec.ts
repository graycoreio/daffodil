import { TestBed } from '@angular/core/testing';

import { DaffProductFilterRequest } from '@daffodil/product';

import { DaffProductFilterRequestFactory } from './request.factory';

describe('@daffodil/product/testing | DaffProductFilterRequestFactory', () => {

  let factory: DaffProductFilterRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductFilterRequestFactory],
    });

    factory = TestBed.inject(DaffProductFilterRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a product filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
