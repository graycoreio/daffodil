import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqualToggleRequest,
  DaffFilterType,
} from '@daffodil/core';

import { DaffFilterToggleRequestEqualFactory } from './toggle-request';

describe('@daffodil/core/testing | DaffFilterToggleRequestEqualFactory', () => {

  let factory: DaffFilterToggleRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterToggleRequestEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterEqualToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal toggle-request', () => {
      expect(result.value).toBeDefined();
      expect(result.type).toEqual(DaffFilterType.Equal);
      expect(result.name).toBeDefined();
      expect(typeof result.value).toEqual('string');
    });
  });
});
