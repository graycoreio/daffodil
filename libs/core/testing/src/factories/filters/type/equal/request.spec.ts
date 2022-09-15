import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqualRequest,
  DaffFilterType,
} from '@daffodil/core';

import { DaffFilterRequestEqualFactory } from './request';

describe('@daffodil/core/testing | DaffFilterRequestEqualFactory', () => {

  let factory: DaffFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterRequestEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterEqualRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal request', () => {
      expect(result.value).toBeDefined();
      expect(result.type).toEqual(DaffFilterType.Equal);
      expect(result.value.length).toEqual(1);
    });
  });
});
