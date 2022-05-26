import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilter,
  DaffProductFilterType,
} from '@daffodil/product';

import { DaffProductFilterFactory } from './filter.factory';

describe('@daffodil/product/testing | DaffProductFilterFactory', () => {

  let productFilterFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductFilterFactory],
    });

    productFilterFactory = TestBed.inject(DaffProductFilterFactory);
  });

  it('should be created', () => {
    expect(productFilterFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilter;

    beforeEach(() => {
      result = productFilterFactory.create();
    });

    describe('when the partial type is equal', () => {
      beforeEach(() => {
        result = productFilterFactory.create({
          type: DaffProductFilterType.Equal,
        });
      });

      it('should return an equal filter', () => {
        expect(result.type).toEqual(DaffProductFilterType.Equal);
      });
    });

    describe('when the partial type is range numeric', () => {
      beforeEach(() => {
        result = productFilterFactory.create({
          type: DaffProductFilterType.RangeNumeric,
        });
      });

      it('should return a range numeric filter', () => {
        expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
      });
    });

    it('should return a product filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
