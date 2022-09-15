import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumeric,
  DaffFilterType,
} from '@daffodil/core';

import { DaffFilterRangeNumericFactory } from './range-numeric';

describe('@daffodil/core/testing | DaffFilterRangeNumericFactory', () => {

  let factory: DaffFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRangeNumeric;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a filter of type range numeric', () => {
      expect(result.max).toBeDefined();
      expect(result.min).toBeDefined();
      expect(typeof result.min).toEqual('number');
      expect(typeof result.max).toEqual('number');
      expect(result.type).toEqual(DaffFilterType.RangeNumeric);
      expect(Object.keys(result.options).length).toEqual(0);
    });
  });
});
