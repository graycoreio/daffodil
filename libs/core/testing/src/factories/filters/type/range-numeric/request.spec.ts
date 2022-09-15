import { TestBed } from '@angular/core/testing';

import { DaffFilterRangeNumericRequest } from '@daffodil/core';
import { DaffFilterType } from '@daffodil/core';

import { DaffFilterRequestRangeNumericFactory } from './request';

describe('@daffodil/core/testing | DaffFilterRequestRangeNumericFactory', () => {

  let factory: DaffFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRangeNumericRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an range numeric request', () => {
      expect(result.type).toEqual(DaffFilterType.RangeNumeric);
      expect(typeof result.value.min).toEqual('number');
      expect(typeof result.value.max).toEqual('number');
      expect(result.value.min).toBeDefined();
      expect(result.value.max).toBeDefined();
    });
  });
});
