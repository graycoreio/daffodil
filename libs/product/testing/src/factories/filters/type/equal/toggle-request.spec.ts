import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterType,
} from '@daffodil/product';

import { DaffProductFilterToggleRequestEqualFactory } from './toggle-request';

describe('@daffodil/product/testing | DaffProductFilterToggleRequestEqualFactory', () => {

  let factory: DaffProductFilterToggleRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterEqualToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal toggle-request', () => {
      expect(result.value).toBeDefined();
      expect(result.type).toEqual(DaffProductFilterType.Equal);
      expect(result.name).toBeDefined();
      expect(typeof result.value).toEqual('string');
    });
  });
});
