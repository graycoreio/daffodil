import { TestBed } from '@angular/core/testing';

import { DaffFilterRequest } from '@daffodil/core';

import { DaffFilterRequestFactory } from './request.factory';

describe('@daffodil/core/testing | DaffFilterRequestFactory', () => {

  let factory: DaffFilterRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffFilterRequestFactory],
    });

    factory = TestBed.inject(DaffFilterRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
