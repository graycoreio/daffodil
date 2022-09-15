import { TestBed } from '@angular/core/testing';


import {
  DaffFilterRangePair,
  daffFilterComputeRangePairLabel,
} from '@daffodil/core';
import { DaffFilterRangeNumericPairFactory } from '@daffodil/core/testing';

import { daffFilterRangePairArrayToDict } from './pair';

describe('@daffodil/core | daffFilterRangePairArrayToDict', () => {
  let rangePairFactory: DaffFilterRangeNumericPairFactory;
  let rangeFilterPair: DaffFilterRangePair<number>;

  beforeEach(() => {
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
    rangeFilterPair = rangePairFactory.create();
  });

  describe('transforming numeric pairs to a dict', () => {
    let dict: Record<string, DaffFilterRangePair<number>>;

    beforeEach(() => {
      dict = daffFilterRangePairArrayToDict([rangeFilterPair]);
    });

    it('should return an object with the range pair keyed from its min and max values', () => {
      expect(dict).toEqual({
        [daffFilterComputeRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value)]: rangeFilterPair,
      });
    });
  });
});
