import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumeric,
  DaffProductFilterType,
} from '@daffodil/product';

import { DaffProductFilterRangeNumericFactory } from './range-numeric';

describe('@daffodil/product/testing | DaffProductFilterRangeNumericFactory', () => {

  let factory: DaffProductFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRangeNumeric;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a product filter of type range numeric', () => {
      expect(result.max).toBeDefined();
      expect(result.min).toBeDefined();
      expect(typeof result.min).toEqual('number');
      expect(typeof result.max).toEqual('number');
      expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
      expect(Object.keys(result.options).length).toEqual(0);
    });
  });
});
