import { TestBed } from '@angular/core/testing';

import { DaffProductFilterRangePair } from '@daffodil/product';

import { DaffProductFilterRangeNumericPairFactory } from './pair';

describe('@daffodil/product/testing | DaffProductFilterRangeNumericPairFactory', () => {

  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
  });

  it('should be created', () => {
    expect(rangePairFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRangePair<number>;

    beforeEach(() => {
      result = rangePairFactory.create();
    });

    it('should return a numeric DaffProductFilterRangePair', () => {
      expect(result.max).toBeDefined();
      expect(typeof result.max.value).toEqual('number');
      expect(typeof result.min.value).toEqual('number');
      expect(result.min.value).toBeLessThanOrEqual(result.max.value);
    });
  });
});
