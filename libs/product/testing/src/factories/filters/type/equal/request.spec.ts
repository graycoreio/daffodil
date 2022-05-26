import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqualRequest,
  DaffProductFilterType,
} from '@daffodil/product';

import { DaffProductFilterRequestEqualFactory } from './request';

describe('@daffodil/product/testing | DaffProductFilterRequestEqualFactory', () => {

  let factory: DaffProductFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterRequestEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterEqualRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal request', () => {
      expect(result.value).toBeDefined();
      expect(result.type).toEqual(DaffProductFilterType.Equal);
      expect(result.value.length).toEqual(1);
    });
  });
});
