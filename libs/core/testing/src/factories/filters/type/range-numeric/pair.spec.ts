import { TestBed } from '@angular/core/testing';

import { DaffFilterRangePair } from '@daffodil/core';

import { DaffFilterRangeNumericPairFactory } from './pair';

describe('@daffodil/core/testing | DaffFilterRangeNumericPairFactory', () => {

  let rangePairFactory: DaffFilterRangeNumericPairFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
  });

  it('should be created', () => {
    expect(rangePairFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRangePair<number>;

    beforeEach(() => {
      result = rangePairFactory.create();
    });

    it('should return a numeric DaffFilterRangePair', () => {
      expect(result.max).toBeDefined();
      expect(typeof result.max.value).toEqual('number');
      expect(typeof result.min.value).toEqual('number');
      expect(result.min.value).toBeLessThanOrEqual(result.max.value);
    });
  });
});
