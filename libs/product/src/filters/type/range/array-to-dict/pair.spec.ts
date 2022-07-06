import { TestBed } from '@angular/core/testing';


import {
  DaffProductFilterRangePair,
  daffProductComputeFilterRangePairLabel,
} from '@daffodil/product';
import { DaffProductFilterRangeNumericPairFactory } from '@daffodil/product/testing';

import { daffProductFilterRangePairArrayToDict } from './pair';

describe('@daffodil/product | daffProductFilterRangePairArrayToDict', () => {
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;
  let rangeFilterPair: DaffProductFilterRangePair<number>;

  beforeEach(() => {
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
    rangeFilterPair = rangePairFactory.create();
  });

  describe('transforming numeric pairs to a dict', () => {
    let dict: Record<string, DaffProductFilterRangePair<number>>;

    beforeEach(() => {
      dict = daffProductFilterRangePairArrayToDict([rangeFilterPair]);
    });

    it('should return an object with the range pair keyed from its min and max values', () => {
      expect(dict).toEqual({
        [daffProductComputeFilterRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value)]: rangeFilterPair,
      });
    });
  });
});
