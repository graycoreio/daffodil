import { TestBed } from '@angular/core/testing';

import { DaffProductFilterRangeNumericToggleRequest } from '@daffodil/product';
import { DaffProductFilterType } from '@daffodil/product';

import { DaffProductFilterToggleRequestRangeNumericFactory } from './toggle-request';

describe('@daffodil/product/testing | DaffProductFilterToggleRequestRangeNumericFactory', () => {

  let factory: DaffProductFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRangeNumericToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a range numeric toggle-request', () => {
      expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
      expect(typeof result.value.min).toEqual('number');
      expect(typeof result.value.max).toEqual('number');
      expect(result.value.min).toBeDefined();
      expect(result.value.max).toBeDefined();
    });
  });
});
