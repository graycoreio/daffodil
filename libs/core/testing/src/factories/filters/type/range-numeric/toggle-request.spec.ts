import { TestBed } from '@angular/core/testing';

import { DaffFilterRangeNumericToggleRequest } from '@daffodil/core';
import { DaffFilterType } from '@daffodil/core';

import { DaffFilterToggleRequestRangeNumericFactory } from './toggle-request';

describe('@daffodil/core/testing | DaffFilterToggleRequestRangeNumericFactory', () => {

  let factory: DaffFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterToggleRequestRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRangeNumericToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a range numeric toggle-request', () => {
      expect(result.type).toEqual(DaffFilterType.RangeNumeric);
      expect(typeof result.value.min).toEqual('number');
      expect(typeof result.value.max).toEqual('number');
      expect(result.value.min).toBeDefined();
      expect(result.value.max).toBeDefined();
    });
  });
});
