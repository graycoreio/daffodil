import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRangePair } from '@daffodil/category';
import { DaffCategoryFilterRangeNumericPairFactory } from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';
import { daffCategoryFilterRangePairArrayToDict } from './pair';

describe('@daffodil/category | daffCategoryFilterRangePairArrayToDict', () => {
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;
  let rangeFilterPair: DaffCategoryFilterRangePair<number>;

  beforeEach(() => {
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
    rangeFilterPair = rangePairFactory.create();
  });

  describe('transforming numeric pairs to a dict', () => {
    let dict: Dict<DaffCategoryFilterRangePair<number>>;

    beforeEach(() => {
      dict = daffCategoryFilterRangePairArrayToDict([rangeFilterPair]);
    });

    it('should return an object with the range pair keyed from its min and max values', () => {
      expect(dict).toEqual({
        [daffCategoryComputeFilterRangePairLabel(rangeFilterPair.min, rangeFilterPair.max)]: rangeFilterPair,
      });
    });
  });
});
