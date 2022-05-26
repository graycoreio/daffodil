import { TestBed } from '@angular/core/testing';

import { DaffProductFilterRangeNumericRequest } from '@daffodil/product';
import { DaffProductFilterType } from '@daffodil/product';

import { DaffProductFilterRequestRangeNumericFactory } from './request';

describe('@daffodil/product/testing | DaffProductFilterRequestRangeNumericFactory', () => {

  let factory: DaffProductFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRangeNumericRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an range numeric request', () => {
      expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
      expect(typeof result.value.min).toEqual('number');
      expect(typeof result.value.max).toEqual('number');
      expect(result.value.min).toBeDefined();
      expect(result.value.max).toBeDefined();
    });
  });
});
